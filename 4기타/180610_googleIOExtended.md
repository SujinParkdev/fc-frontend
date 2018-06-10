## Google I/O'18 Extended 2018 Seoul(Google Developer Group Korea)
### 2018년 6월 10일 세정대학교 광개토관 컨벤션홀(B2)

---
## I/O Extended란?
I/O Extended는 Google I/O 현장을 참석하지 못하였지만,
Google I/O의 현장 경험과 발표한 내용을 공유하는 자리입니다.

I/O Extended는 Google에서 진행하는 것이 아닌,
GDG (Google Developers Group) Korea에서 개최하고 있는,
비영리 목적의 커뮤니티 행사입니다.

---
### 프로그램 및 일정

[11:00 ~ 12:00] 등록 및 입장
[12:00 ~ 12:20] Keynote (David McLaughlin - Global Programs Lead, Google Developers)

트랙 A
 [12:50 ~ 13:30] What's new in Android P (전병권 - Riot Games)
 [13:45 ~ 14:25] 새로운 안드로이드 개발 툴 (정승욱 - Grab)
 [14:40 ~ 15:20] 안드로이드 P 업데이트 - Auto, TV, Wear (김원일 - Google)
 [15:50 ~ 16:30] Review: Material Design from I/O (김지홍 - Design Spectrum)
 [16:45 ~ 17:25] New Google News & Material design (안태완 - Google)

트랙 B
 [12:50 ~ 13:30] What's new in TensorFlow (이건희 - 다우기술)
 [13:45 ~ 14:25] Google Assistant (양찬석 - Google)
 [14:40 ~ 15:20] TPU (이진원 - 삼성전자)
 [15:50 ~ 16:30] ML Kit과 함께하는 머신러닝 (남상균 - NBT)
 [16:45 ~ 17:25] TensorFlow Serving과 Apache Mesos를 활용한 카카오 모빌리티의 고성능 예측 클러스터 구성(유승일 - 카카오 모빌리티)

트랙 C
 [12:50 ~ 13:30] Exploring what're new in Web for the Natively app (도창욱 - RIot Games)
 [13:45 ~ 14:25] 웹의 미래는 몰입형 - WebVR 및 WebXR 소개 (맹기완 - 비사이드소프트)
 [14:40 ~ 15:20] Flutter, Beta but Better and Better (강동혁 - 단비스토어)
 [15:50 ~ 16:30] How to deploy serverless Node.js microservices (정민석(Harrison Jung) - 꿈많은청년들)
 [16:45 ~ 17:25] Microservices in the Cloud with Kubernetes and Istio (이정운 - Google)

---
## WebVR 및 WebXR (맹기완 - 비사이드소프트)

https://developers.google.com/web/fundamentals/vr/?hl=ko

나중에 찾아보기! 앱을 개발할 필요 없이 웹에서 VR, AR 제공가능. JavaScript API.


---
## Flutter, Beta but Better and Better (강동혁 - 단비스토어)

Flutter는 구글에서 만든 오픈소스 프레임워크. C#을 기반으로 한 Dart를 사용. 자스를 사용하지않기 위해. Google Meterial design에 있는 위젯 등도 이미 개발되어 있다. 

- 빠른 개발에 적합
- Widget Inspector : 에뮬레이터 상에서 찍어서 인스펙터로 확인가능함. 
- Native perpormance : native코드로 작성된 것을 사용할 수 있을 뿐만 아니라 native로 컴파일되기 때문에 속도가 빠르다. 

---
## How to deploy serverless Node.js microservices (정민석(Harrison Jung) - 꿈많은청년들)

MA(Monolith Architecture, 빠른 개발, 에러가 난 경우 전체 서비스를 돌리지 못함) / Microservices (작은 단위의 기능으로 서비스를 분리, 구성. 대규모 서비스에 적합)

우선 간단히 Monilith로 만들고, 규모가 커지면 분리를 해서 Microservice.

- Node.js for Microservice

JavaScript Runtime
Event Driven 
Async Non-blocking I/O : 비동기I/O, 요청에 응답을 기다리는 동안 다른 작업 가능

- **Why Serverless??**

No Use, No pay : 사용한 양에 비례하는 요금제
Automatic Scale
Focus on Code : 서버의 기본적인 설정은 클라우드에 맡기고 Code만 신경 쓰면된다.

---
## New Google News & Material design (안태완 - Google)

UX총괄!
오랫동안 Google News라고 하면 클래식한 페이퍼 뉴스를 떠올렸으나, 현재에는 다양한 곳으로 활용되고 있다. 47K documents every minutes..! But Fake news의 문제.

수많은 컨텐츠, 플랫폼에도 불구하고, 50퍼센트가 넘는 사람들이 제대로 된 정보를 얻는데 어려움을 느끼며, 정보를 얻는다 하더라도 신뢰하지 못한다고 응답했다.

=> Google Mission Statement : Organize thesorld's informasion and make it universally accessible and useful.

=> Google News 가 이런 기조에서 확장되는 것

**Mobile First to AI First!** : 인력대체를 위한 AI이 아닌, 고급 인력을 서포트하기위한 AI

=> 그런 맥락에서 Google News가 서포트하겠다는 것!

1. Keep up with the news you care about

- For you : top five brife-Head line(Global, local news), Something you should know ... (article, podcast, video)
- Head Lines : Traditional news style
- Newscasts : quickly preview -> deep dive

2. Undestand the full story

- Full coverage : 중요한 부분 자동 요약 + 원한다면 deep dive할 수 있도록

3. Enjoy and support the news source you love

- Newsstand : 다양한 뉴스, 퍼블리셔, 매거진 소개(더 많이 선택할수록 personalize가 잘된다. 소비자 입장에서도 좋고, 퍼블리셔입장에서도 서포트해주는 지지층이 생기니 좋음.

### Built with new Google Material Thmeme

Material.io참고

Material design : 오픈 소스를 기반으로 높은 품질의 디지털 경험을 쉽게 제공하는 것.
Material Theme : Material design에 맞게 브랜드화를 할 수 있도록 Theme을 제공하는 것. 각 프로덕트의 브랜딩을 할 수 있도록.

아이콘, 타이포..

기본 디자인의 기조는 구글 브랜드를 내세우는 것이 아니라 컨텐츠 중심으로.
