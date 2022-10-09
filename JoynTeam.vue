<template>
  <div v-if="isImg1Loaded == false" class="loader">
    <Spinner />
  </div>

  <transition name="fade">
    <div v-if="isImg1Loaded" class="wrapper">
      <div class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }">
        <!-- <h3 class="heading">Core Team</h3>
        <p class="para">
          The Information and profile of core team members of JOYN.
        </p> -->

        <div class="arrowOuter" @click="goDown">
          <div class="arrow"></div>
          <div class="arrow delay1"></div>
          <div class="arrow delay2"></div>
          <div class="arrow delay3"></div>
        </div>
      </div>

      <div id="container" class="container" style="margin-top: 30px" ref="container">
        <div class="row">
          <div @click="profile = 'profile1'" class="col-sm box1" style="border: 1px solid lightgray">
            <h5 class="name">Syed Wajid</h5>

            <p class="profile">CEO Joyn/Joyn Digital</p>
          </div>

          <div @click="profile = 'profile2'" class="col-sm box2" style="border: 1px solid lightgray">
            <h5 class="name">Haider Majeed</h5>

            <p class="profile">CTO Joyn Digital</p>
          </div>

          <div @click="profile = 'profile3'" class="col-sm box3" style="border: 1px solid lightgray">
            <h5 class="name">Roozi Ali</h5>

            <p class="profile">COO – Joyn</p>
          </div>
        </div>

        <div class="row">
          <div @click="profile = 'profile4'" class="col-sm box4" style="border: 1px solid lightgray">
            <h5 class="name">Salman Mansoor</h5>
            <p class="profile">Sr. Full Stack Developer</p>
          </div>

          <div @click="profile = 'profile5'" class="col-sm box5" style="border: 1px solid lightgray">
            <h5 class="name">Ibrar Hussain</h5>
            <p class="profile">Sr. Full Stack Developer</p>
          </div>

          <div @click="profile = 'profile6'" class="col-sm box6" style="border: 1px solid lightgray">
            <h5 class="name">Bisma Ahmed</h5>

            <p class="profile">Digital marketing and communications officer</p>
          </div>
        </div>

        <!-- <div class="row" data-aos="zoom-in" data-aos-duration="1000">
          <div
            @click="profile = 'profile7'"
            class="col-sm box7"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Irtiza Hussain</h5>

            <p class="profile">Accounts Manager</p>
          </div>

          <div
            @click="profile = 'profile8'"
            class="col-sm box8"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Umair</h5>

            <p class="profile">???</p>
          </div>

          <div
            @click="profile = 'profile9'"
            class="col-sm box9"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Shaik</h5>

            <p class="profile">???</p>
          </div>
        </div>
        <div class="row" data-aos="zoom-in" data-aos-duration="1000">
          <div
            @click="profile = 'profile10'"
            class="col-sm box10"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Nasir Abbas</h5>

            <p class="profile">Field Auditor</p>
          </div>

          <div
            @click="profile = 'profile11'"
            class="col-sm box11"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Salman Manzoor</h5>

            <p class="profile">Sr. Full Stack Developer</p>
          </div>

          <div
            @click="profile = 'profile12'"
            class="col-sm box12"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Ibrar Hussain</h5>

            <p class="profile">Sr. Full Stack Developer</p>
          </div>
        </div>

        <div class="row" data-aos="zoom-in" data-aos-duration="1000">
          <div
            @click="profile = 'profile13'"
            class="col-sm box13"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Maryam Syed</h5>

            <p class="profile">Project manager</p>
          </div>

          <div
            @click="profile = 'profile14'"
            class="col-sm box14"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Bisma Ahmad</h5>

            <p class="profile">Digital marketing and communications officer</p>
          </div>

          <div
            @click="profile = 'profile15'"
            class="col-sm box15"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Umar</h5>
            <p class="profile">Jr. Web Developer</p>
          </div>
        </div>

        <div
          class="row d-flex justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            @click="profile = 'profile16'"
            class="col-sm-4 box16"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Ibrar Javed</h5>
            <p class="profile">Jr. Flutter Developer</p>
          </div>

          <div
            @click="profile = 'profile17'"
            class="col-sm-4 box17"
            style="border: 1px solid lightgray"
          >
            <h5 class="name">Naeem Afzal</h5>

            <p class="profile">Jr. Full Stack Developer</p>
          </div>
        </div> -->
      </div>
    </div>
  </transition>

  <!-- <transition name="slide">
    <div v-if="profile == 'profile1'" class="profile1">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translatex(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Syed Wajid</h4>
        <h6 style="color: gray; margin-left: 40px">CEO Joyn/Joyn Digital</h6>
        <p style="text-align: justify; margin-left: 40px">
          Syed Wajid has done Engineering in electronics and Master’s in
          business administration, he has over 25 year’s professional experience
          in both fixed and cellular networks (2G/3G/4G). Have worked at senior
          level positions with major cellular operators in Pakistan such as
          Jazz, CMPak, PTCL and NTC and as CTO in Warid Telecom Georgia.
          Currently heading as CEO, JOYN Group with engineering services,
          digital transformation and consultancies divisions providing services
          mainly in telecom and energy sectors. Apart from this he has diverse
          experience in operations, planning and deployment of cellular as well
          as fixed networks (core, transmission, data, access, NGN etc) and have
          led projects worth more than 700 million USD and controlled overall
          more than USD 500 million annual operational budgets. On management
          side I have the proven ability to turn around functions by improving
          efficiency/ performance in terms of system, processes and people. Have
          successfully planned number of networks including CMPak network at the
          time of its launch. Have extensive experience in business development,
          for the last five years have established JOYN Group from scratch which
          has now a significant share in telecom market. Other
          skills/experiences include technology procurement, project/program
          management, contract management, network swap management, strategic
          planning and analysis.Have closely worked with higher management on
          developing strategy, handing regulatory affairs, also representing
          organizations in PTA on licensing and other related issues. Have been
          leading CMPak during MNP as well as in other strategic projects such
          as submarine cable development, international gateway matters etc.
          Eager to learn and passion to develop teams I have acquired number of
          trainings local as well as international and have designed and
          delivered number of management and technology trainings throughout my
          career directly impacting team engagement and performance.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/wajid.jpeg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile2'" class="profile2">
      <div
        @click="profile = ''"
        style="
          height: 10px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Syed Hasan Kazmi</h4>
        <h6 style="color: gray; margin-left: 40px">Honarary Director</h6>
        <p style="text-align: justify; margin-left: 40px">
          Syed Hassan Kazmi is a Chartered Accountant and Fellow Member –
          Institute of Cost and Management Accountants with more than 23 years
          of experience in financial and management accounting, auditing,
          project management and corporate compliance programs. As a Chartered
          Accountant with 23+ years extensive experience in the finance
          industry, Mr. Kazmi possesses solid fundamental knowledge of
          accounting principles, performing financial audits and tax compliance.
          He has successfully implemented corporate wide compliance programs
          introduced new policies and procedures to optimize departmental
          efficiency and productivity. His experience in preparation of
          financial statements, analysing financial information and providing
          feedback to improve systems has created a significant impact on many
          organisations.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/hasan.jpg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  

  <transition name="slide">
    <div v-if="profile == 'profile4'" class="profile4">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Zahir Hussain</h4>
        <h6 style="color: gray; margin-left: 40px">Director Projects Joyn</h6>
        <p style="text-align: justify; margin-left: 40px">
          Engineer by profession Zahir has more than 8 years of experience in
          telecommunication sector. After working with multiple operators, Zahir
          brings in rich experience on RF, BSS, Sites Buildout and Project
          Management. Has headed multiple departments within Joyn before his
          current position as Director Projects.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/zahir.jpg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile5'" class="profile5">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Ammad Ali</h4>
        <h6 style="color: gray; margin-left: 40px">Director Joyn Digital</h6>
        <p style="text-align: justify; margin-left: 40px">
          Finance professional with rich experience in financial management,
          audits and taxation.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/ammad.jpeg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile6'" class="profile6">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translatex(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Roozi Ali</h4>
        <h6 style="color: gray; margin-left: 40px">Seasoned Engineer</h6>
        <p style="text-align: justify; margin-left: 40px">
          Abdul Aziz Khan is a seasoned engineer with more than 24 years of
          experience with multiple organizations in Pakistan and Gulf. With a
          keen interest in management he is a PMI certified Project Manager and
          also in the midst of completing his MBA in Finance. He has keen
          interest in training and development and loves to teach and learn.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/azizkhan.jpg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile7'" class="profile7">
      <div
        @click="profile = ''"
        style="
          height: 10px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Irtiza Hussain</h4>
        <h6 style="color: gray; margin-left: 40px">Key Accounts Manager</h6>
        <p style="text-align: justify; margin-left: 40px">
          Irtiza Hussain is a confident and highly organized administrative
          professional with 10 years of experience in busy office environment,
          rapidly assimilating and learning process applicable to in house
          –operation. Meticulous in approach to data collection and
          presentation, he setup and maintain records, incorporating critical
          information and running high quality reports and analysis
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/Irtiza.jpg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile8'" class="profile8">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Umair</h4>
        <h6 style="color: gray; margin-left: 40px">???</h6>
        <p style="text-align: justify; margin-left: 40px">
          Engineering Degree with extensive experience in software developement,
          embedded systems, AI and machine learning. After developing number of
          solutions for local and international clients Haider is now a
          permanent part of Joyn digital with a vision to contribute towards
          digital Pakistan
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/anon.png"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile9'" class="profile9">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Shaik</h4>
        <h6 style="color: gray; margin-left: 40px">???</h6>
        <p style="text-align: justify; margin-left: 40px">
          Engineer by profession Zahir has more than 8 years of experience in
          telecommunication sector. After working with multiple operators, Zahir
          brings in rich experience on RF, BSS, Sites Buildout and Project
          Management. Has headed multiple departments within Joyn before his
          current position as Director Projects.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/anon.png"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile10'" class="profile10">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Nasir Abbas</h4>
        <h6 style="color: gray; margin-left: 40px">Field Auditor</h6>
        <p style="text-align: justify; margin-left: 40px">
          He has done engineering in telecommunication, with expertise in both
          fixed and cellular networks. He has worked on multiple projects as
          different roles particular in microwave and optical fibre network.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/NasirAbbas.jpg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition> -->

  <!-- <transition name="slide">
    <div v-if="profile == 'profile13'" class="profile13">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translatex(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Maryam Syed</h4>
        <h6 style="color: gray; margin-left: 40px">Project Manager</h6>
        <p style="text-align: justify; margin-left: 40px">
          11 plus years of IT, software development, and project management in
          the Medical and Oil and Gas industries. Areas of expertise include
          business analyst, project management with lead roles across supply
          chain domain and IT. Strong Leadership qualities and the ability to
          drive and manage multiple projects and teams. implementer and Scrum
          Master / Agile Coach for multiple teams. Led logistics and procurement
          projects to streamline and improve E2E processes across supply chain
          business systems; reduced logistic spending by over $2M by
          implementing cross-functional process improvement strategies Work as a
          project manager for the E-Commerce project of $3.5M, clearly defining
          project scope and requirements and determining solution design.
          Required close collaboration with business partners.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/maryam.jpg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition>
  <transition name="slide">
    <div v-if="profile == 'profile14'" class="profile14">
      <div
        @click="profile = ''"
        style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        "
      >
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Bisma Ahmad</h4>
        <h6 style="color: gray; margin-left: 40px">
          Digital marketing and communications officer
        </h6>
        <p style="text-align: justify; margin-left: 40px">
          She is working on improving the market outreach and outlook of the
          company. She is a graduate student of Tsinghua University majoring in
          Global Business Journalism. She believes that communication is a very
          vital key to growth and therefore she intends to utilize her
          storytelling and datamining skills to do work more efficiently. She is
          passionate about writing, creating digital content and doing social
          work.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img
          src="../assets/bismaahmad.jpg"
          style="height: 100%; width: 90%; border-radius: 10px"
        />
      </div>
    </div>
  </transition> -->
  <transition name="slide">
    <div v-if="profile == 'profile1'" class="profile1">
      <div @click="profile = ''" style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        ">
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Syed Wajid</h4>
        <h6 style="color: gray; margin-left: 40px">CEO Joyn/Joyn Digital</h6>
        <p style="text-align: justify; margin-left: 40px">
          Syed Wajid has done Engineering in electronics and Master’s in
          business administration, he has over 25 year’s professional experience
          in both fixed and cellular networks (2G/3G/4G). Have worked at senior
          level positions with major cellular operators in Pakistan such as
          Jazz, CMPak, PTCL and NTC and as CTO in Warid Telecom Georgia.
          Currently heading as CEO, JOYN Group with engineering services,
          digital transformation and consultancies divisions providing services
          mainly in telecom and energy sectors. Apart from this he has diverse
          experience in operations, planning and deployment of cellular as well
          as fixed networks (core, transmission, data, access, NGN etc) and have
          led projects worth more than 700 million USD and controlled overall
          more than USD 500 million annual operational budgets. On management
          side I have the proven ability to turn around functions by improving
          efficiency/ performance in terms of system, processes and people. Have
          successfully planned number of networks including CMPak network at the
          time of its launch. Have extensive experience in business development,
          for the last five years have established JOYN Group from scratch which
          has now a significant share in telecom market. Other
          skills/experiences include technology procurement, project/program
          management, contract management, network swap management, strategic
          planning and analysis.Have closely worked with higher management on
          developing strategy, handing regulatory affairs, also representing
          organizations in PTA on licensing and other related issues. Have been
          leading CMPak during MNP as well as in other strategic projects such
          as submarine cable development, international gateway matters etc.
        </p>
      </div>
      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img src="../assets/wajid.jpeg" style="height: 100%; width: 90%; border-radius: 10px" />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile2'" class="profile2">
      <div @click="profile = ''" style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        ">
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Haider Majeed</h4>
        <h6 style="color: gray; margin-left: 40px">CTO Joyn Digital</h6>
        <p style="text-align: justify; margin-left: 40px">
          Engineering Degree with extensive experience in software developement,
          embedded systems, AI and machine learning. After developing number of
          solutions for local and international clients Haider is now a
          permanent part of Joyn digital with a vision to contribute towards
          digital Pakistan.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img src="../assets/haider.jpg" style="height: 100%; width: 90%; border-radius: 10px" />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile3'" class="profile3">
      <div @click="profile = ''" style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        ">
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Roozi ALi</h4>
        <h6 style="color: gray; margin-left: 40px">COO – Joyn</h6>
        <p style="text-align: justify; margin-left: 40px">
          Mr. Roozi Ali is graduate in Electronics & Communications Engineering
          from University of Engineering & Technology (UET) Lahore Pakistan. He
          is Masters in Business Administration. He is in the ICT industry since
          more than two decades. He has worked on leadership and management
          positions in leading organizations in Pakistan and abroad. He was part
          of the Ericsson team who launched WARID 2G/2.75G network in 28 cities
          in Pakistan. He was member of the Core team of WARID LTE
          Transformation project and awarded performance excellence award. He
          was part of the due diligence technical team in WARID-JAZZ merger
          project, one of the mega mergers & acquisitions programs in Pakistan.
          He provided consultancy services to MTN Group and Ericsson in Market
          Unit Sub-Saharan Africa (MUSA) serving around 23 countries. He headed
          business units IN & VAS in South Sudan during his assignments with
          MDIC Lebanon. He has led project & program teams in successfully
          delivering multiple Digital Transformation, IT Development, OSS/BSS,
          Fixed & Mobile Networks, IT Development, Unified Communications,
          Mobile Financial Services and Optical Fiber Network projects. He has
          provided specialist consultancy services to government of Pakistan
          (GoP) for establishment of Digital Citizen Facilitation Centers (CFC)
          which was a public sector strategic digital transformation initiative.
          Roozi participated in industry forums in Germany, Sweden and Brazil
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img src="../assets/rooziali.jpg" style="height: 100%; width: 90%; border-radius: 10px" />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile4'" class="profile4">
      <div @click="profile = ''" style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        ">
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Salman Mansoor</h4>
        <h6 style="color: gray; margin-left: 40px">Sr. Full Stack Developer</h6>
        <p style="text-align: justify; margin-left: 40px">
          Salman Mansoor has a degree in Electrical Engineering in Institute of space technology. He has
certification from Masia Institute in Programming and Web Development. After Education, he pursued
his career in Programming and Web Development starting as Freelancer and started working with
DPENTA Software Solutions as an IOS App developer in 2018. After working as an App Developer for 2
years at DPENTA, he joined JOYN Digital as a Web developer in 2021 and been working as a Full Stack
Web developer and he developed the company website and started working on the enterprise solution
system named LATITUDE.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img src="../assets/Salman.jpg" style="height: 100%; width: 90%; border-radius: 10px" />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile5'" class="profile5">
      <div @click="profile = ''" style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        ">
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Ibrar Hussain</h4>
        <h6 style="color: gray; margin-left: 40px">Sr. Full Stack Developer</h6>
        <p style="text-align: justify; margin-left: 40px">
          Ibrar Hussain is a Software Engineer, along with expertise of project management. He has been serving
          different organizations for the last 3 years in the domains like, Software Architecture Designing, Database
          Designing, Product Development Planning and Roadmaps, Product Release Control and Core Development. He has
          worked with National as well as International Software Development firms on different major products.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img src="../assets/Ibrars.jpg" style="height: 100%; width: 90%; border-radius: 10px" />
      </div>
    </div>
  </transition>

  <transition name="slide">
    <div v-if="profile == 'profile6'" class="profile6">
      <div @click="profile = ''" style="
          height: 20px;
          width: 20px;
          margin-left: 100%;
          transform: translateX(-20px);
          cursor: pointer;
        ">
        X
      </div>

      <div style="width: 70%; float: left; padding-right: 50px">
        <h4 style="color: gray; margin-left: 40px">Bisma Ahmad</h4>
        <h6 style="color: gray; margin-left: 40px">Digital marketing and communications office</h6>
        <p style="text-align: justify; margin-left: 40px">
          She is working on improving the market outreach and outlook of the
          company. She is a graduate student of Tsinghua University majoring in
          Global Business Journalism. She believes that communication is a very
          vital key to growth and therefore she intends to utilize her
          storytelling and datamining skills to do work more efficiently. She is
          passionate about writing, creating digital content and doing social
          work.
        </p>
      </div>

      <div style="height: 30%; width: 20%; float: left; margin-left: 5%">
        <img src="../assets/bismaahmad.jpg" style="height: 100%; width: 90%; border-radius: 10px" />
      </div>
    </div>
  </transition>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
  components: { Spinner },

  methods: {
    goDown() {
      const element = this.$refs.container;

      element.scrollIntoView();
    },

    handleResize() {
      if (window.innerWidth < 767) {
        this.shortScreen = true;
      } else {
        this.shortScreen = false;
      }
    },
  },

  data() {
    return {
      show: false,

      shortScreen: false,
      profile: "",
      isImg1Loaded: false,
      img1Url: "",
      dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",
    };
  },

  mounted() {
    this.show = true;

    let img1 = new Image();

    const img1url = require("../assets/team.jpg");

    img1.onload = () => {
      this.isImg1Loaded = true;
      this.img1Url = img1.src;
      console.log("image1 loaded", this.isImg1Loaded);
    };

    img1.src = img1url;
  },

  created() {
    window.addEventListener("resize", this.handleResize);
  },

  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.loader {
  background: lightgray;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
}

.wrapper {
  padding-bottom: 2%;
}

.arrowOuter {
  position: absolute;
  top: 70vh;
  left: 90vw;
  cursor: pointer;
}

.arrow {
  height: 20px;
  width: 20px;
  border-left: 2px solid white;
  border-top: 2px solid white;
  margin-top: -5px;
  transform: rotate(-135deg);
  animation: slide 1s linear infinite;
}

.delay1 {
  animation-delay: 0.25s;
}

.delay2 {
  animation-delay: 0.5s;
}

.delay3 {
  animation-delay: 0.75s;
}

@keyframes slide {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.blue-2 {
  background: blue;
}

.outer {
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: 105% 105%;
  position: relative;
  background-image: url("../assets/1907328.jpg");
  background-attachment: fixed;
}

.heading {
  color: white;
  position: absolute;
  top: 45%;
  left: 10vw;
  width: 100%;
}

.para {
  color: white;
  position: absolute;
  top: 52%;
  left: 10vw;
  width: 30%;
}

.name {
  text-align: center;
  margin-top: 90%;
}

.profile {
  text-align: center;
  margin-top: 20px;
}

.box1 {
  background-color: rgb(255, 255, 255);
  background-image: url("../assets/wajid.jpeg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  transition: all 1s ease;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
}

.box1:hover {
  background-image: url("../assets/wajid.jpeg");
  filter: grayscale(0);
  background-size: 105% 105%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box1:hover>.name {
  color: white;
}

.box1:hover>.profile {
  color: white;
}

.box2 {
  background-color: rgb(255, 255, 255);
  background-image: url("../assets/haider.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  transition: all 1s ease;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
}

.box2:hover {
  background-image: url("../assets/haider.jpg");
  filter: grayscale(0);
  background-size: 105% 105%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box2:hover>.name {
  color: white;
}

.box2:hover>.profile {
  color: white;
}

.box3 {
  background-color: rgb(255, 255, 255);
  background-image: url("../assets/rooziali.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  transition: all 1s ease;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
}

.box3:hover {
  background-image: url("../assets/rooziali.jpg");
  filter: grayscale(0);
  background-size: 105% 105%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box3:hover>.name {
  color: white;
}

.box3:hover>.profile {
  color: white;
}

.box4 {
  background-color: rgb(255, 255, 255);
  background-image: url("../assets/Salman.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  transition: all 1s ease;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
}

.box4:hover {
  background-image: url("../assets/Salman.jpg");
  filter: grayscale(0);
  background-size: 105% 105%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box4:hover>.name {
  color: white;
}

.box4:hover>.profile {
  color: white;
}

.box5 {
  background-color: rgb(255, 255, 255);
  background-image: url("../assets/Ibrars.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  transition: all 1s ease;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
}

.box5:hover {
  background-image: url("../assets/Ibrars.jpg");
  filter: grayscale(0);
  background-size: 105% 105%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box5:hover>.name {
  color: white;
}

.box5:hover>.profile {
  color: white;
}

.box6 {
  background-color: rgb(255, 255, 255);
  background-image: url("../assets/bismaahmad.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  transition: all 1s ease;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
}

.box6:hover {
  background-image: url("../assets/bismaahmad.jpg");
  filter: grayscale(0);
  background-size: 105% 105%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box6:hover>.name {
  color: white;
}

.box6:hover>.profile {
  color: white;
}

.profile1 {
  position: fixed;
  height: 90vh;
  width: 60vw;
  background: rgb(240, 236, 236);
  margin-top: -45vh;
  top: 50vh;
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  border-radius: 20px;
}

.profile2 {
  position: fixed;
  height: 90vh;
  width: 60vw;
  background: rgb(240, 236, 236);
  margin-top: -45vh;
  top: 50vh;
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  border-radius: 20px;
}

.profile3 {
  position: fixed;
  height: 90vh;
  width: 60vw;
  background: rgb(240, 236, 236);
  margin-top: -45vh;
  top: 50vh;
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  border-radius: 20px;
}

.profile4 {
  position: fixed;
  height: 90vh;
  width: 60vw;
  background: rgb(240, 236, 236);
  margin-top: -45vh;
  top: 50vh;
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  border-radius: 20px;
}

.profile5 {
  position: fixed;
  height: 90vh;
  width: 60vw;
  background: rgb(240, 236, 236);
  margin-top: -45vh;
  top: 50vh;
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  border-radius: 20px;
}

.profile6 {
  position: fixed;
  height: 90vh;
  width: 60vw;
  background: rgb(240, 236, 236);
  margin-top: -45vh;
  top: 50vh;
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  border-radius: 20px;
}

@media screen and (max-width: 1000px) {
  .para {
    width: 100%;
    left: 0;
  }

  .heading {
    left: 0;
  }

  .profile1 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile2 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile3 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile4 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile5 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile6 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile7 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile8 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile9 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile10 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile11 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile12 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile13 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile14 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile15 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile16 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }

  .profile17 {
    width: 100%;
    left: 0;
    margin-left: 0;
  }
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  opacity: 1;
}

.fade-enter-from

/* .fade-enter-active below version 2.1.8 */
  {
  opacity: 0;
}

.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.slide-enter-active {
  transition: all 1s;
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

/* .slide-leave-active {
  transition: all 0.5s;
  animation: fadeOut 0.5s;
  -webkit-animation: fadeOut 0.5s;
  -moz-animation: fadeOut 0.5s;
  -o-animation: fadeOut 0.5s;
  -ms-animation: fadeOut 0.5s;
} */
.slide-enter-from

/* .fade-leave-active below version 2.1.8 */
  {
  left: -20%;
  top: 50%;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.slide-leave-to {
  left: 50%;
  top: 50%;
  animation: slide-leave-active 1s ease-out;
}

/* my custom styling for zoom out */

/* .zoom-in-out-box {
  margin: 24px;
  width: 50px;
  height: 50px; 
  background: #f50057;
  animation: zoom-in-zoom-out 1s ease infinite;
} */

@keyframes slide-leave-active {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(0);
  }
}

.grid {
  position: relative;
  margin: 0 auto;
  padding: 1em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  background: #3085a3;
  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption>a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption>a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Individual effects */

/*---------------*/
/***** Lily *****/
/*---------------*/

figure.effect-lily img {
  max-width: none;
  width: -webkit-calc(100% + 50px);
  width: calc(100% + 50px);
  opacity: 0.7;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

figure.effect-lily figcaption {
  text-align: left;
}

figure.effect-lily figcaption>div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  height: 50%;
}

figure.effect-lily h2,
figure.effect-lily p {
  -webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
}

figure.effect-lily h2 {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

figure.effect-lily p {
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}

figure.effect-lily:hover img,
figure.effect-lily:hover p {
  opacity: 1;
}

figure.effect-lily:hover img,
figure.effect-lily:hover h2,
figure.effect-lily:hover p {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-lily:hover p {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}

/*---------------*/
/***** Sadie *****/
/*---------------*/

figure.effect-sadie figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(top,
      rgba(72, 76, 97, 0) 0%,
      rgba(72, 76, 97, 0.8) 75%);
  background: linear-gradient(to bottom,
      rgba(72, 76, 97, 0) 0%,
      rgba(72, 76, 97, 0.8) 75%);
  content: "";
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.effect-sadie h2 {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: #484c61;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.effect-sadie figcaption::before,
figure.effect-sadie p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

figure.effect-sadie:hover h2 {
  color: #fff;
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
}

figure.effect-sadie:hover figcaption::before,
figure.effect-sadie:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Roxy *****/
/*---------------*/

figure.effect-roxy {
  background: -webkit-linear-gradient(45deg, #ff89e9 0%, #05abe0 100%);
  background: linear-gradient(45deg, #ff89e9 0%, #05abe0 100%);
}

figure.effect-roxy img {
  max-width: none;
  width: -webkit-calc(100% + 60px);
  width: calc(100% + 60px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-50px, 0, 0);
  transform: translate3d(-50px, 0, 0);
}

figure.effect-roxy figcaption::before {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  border: 1px solid #fff;
  content: "";
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-20px, 0, 0);
  transform: translate3d(-20px, 0, 0);
}

figure.effect-roxy figcaption {
  padding: 3em;
  text-align: left;
}

figure.effect-roxy h2 {
  padding: 30% 0 10px 0;
}

figure.effect-roxy p {
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
}

figure.effect-roxy:hover img {
  opacity: 0.7;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-roxy:hover figcaption::before,
figure.effect-roxy:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Bubba *****/
/*---------------*/

figure.effect-bubba {
  background: #9e5406;
}

figure.effect-bubba img {
  opacity: 0.7;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

figure.effect-bubba:hover img {
  opacity: 0.4;
}

figure.effect-bubba figcaption::before,
figure.effect-bubba figcaption::after {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  content: "";
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-bubba figcaption::before {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}

figure.effect-bubba figcaption::after {
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  -webkit-transform: scale(1, 0);
  transform: scale(1, 0);
}

figure.effect-bubba h2 {
  padding-top: 30%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
}

figure.effect-bubba p {
  padding: 20px 2.5em;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, 20px, 0);
  transform: translate3d(0, 20px, 0);
}

figure.effect-bubba:hover figcaption::before,
figure.effect-bubba:hover figcaption::after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

figure.effect-bubba:hover h2,
figure.effect-bubba:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Romeo *****/
/*---------------*/

figure.effect-romeo {
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

figure.effect-romeo img {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, 0, 300px);
  transform: translate3d(0, 0, 300px);
}

figure.effect-romeo:hover img {
  opacity: 0.6;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-romeo figcaption::before,
figure.effect-romeo figcaption::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 1px;
  background: #fff;
  content: "";
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

figure.effect-romeo:hover figcaption::before {
  opacity: 0.5;
  -webkit-transform: translate3d(-50%, -50%, 0) rotate(45deg);
  transform: translate3d(-50%, -50%, 0) rotate(45deg);
}

figure.effect-romeo:hover figcaption::after {
  opacity: 0.5;
  -webkit-transform: translate3d(-50%, -50%, 0) rotate(-45deg);
  transform: translate3d(-50%, -50%, 0) rotate(-45deg);
}

figure.effect-romeo h2,
figure.effect-romeo p {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

figure.effect-romeo h2 {
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);
}

figure.effect-romeo p {
  padding: 0.25em 2em;
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, 150%, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, 150%, 0);
}

figure.effect-romeo:hover h2 {
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);
}

figure.effect-romeo:hover p {
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);
}

/*---------------*/
/***** Layla *****/
/*---------------*/

figure.effect-layla {
  background: #18a367;
}

figure.effect-layla img {
  height: 390px;
}

figure.effect-layla figcaption {
  padding: 3em;
}

figure.effect-layla figcaption::before,
figure.effect-layla figcaption::after {
  position: absolute;
  content: "";
  opacity: 0;
}

figure.effect-layla figcaption::before {
  top: 50px;
  right: 30px;
  bottom: 50px;
  left: 30px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

figure.effect-layla figcaption::after {
  top: 30px;
  right: 50px;
  bottom: 30px;
  left: 50px;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  -webkit-transform: scale(1, 0);
  transform: scale(1, 0);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

figure.effect-layla h2 {
  padding-top: 26%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

figure.effect-layla p {
  padding: 0.5em 2em;
  text-transform: none;
  opacity: 0;
  -webkit-transform: translate3d(0, -10px, 0);
  transform: translate3d(0, -10px, 0);
}

figure.effect-layla img,
figure.effect-layla h2 {
  -webkit-transform: translate3d(0, -30px, 0);
  transform: translate3d(0, -30px, 0);
}

figure.effect-layla img,
figure.effect-layla figcaption::before,
figure.effect-layla figcaption::after,
figure.effect-layla p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-layla:hover img {
  opacity: 0.7;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-layla:hover figcaption::before,
figure.effect-layla:hover figcaption::after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

figure.effect-layla:hover h2,
figure.effect-layla:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-layla:hover figcaption::after,
figure.effect-layla:hover h2,
figure.effect-layla:hover p,
figure.effect-layla:hover img {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

/*---------------*/
/***** Honey *****/
/*---------------*/

figure.effect-honey {
  background: #4a3753;
}

figure.effect-honey img {
  opacity: 0.9;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

figure.effect-honey:hover img {
  opacity: 0.5;
}

figure.effect-honey figcaption::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: #fff;
  content: "";
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

figure.effect-honey h2 {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1em 1.5em;
  width: 100%;
  text-align: left;
  -webkit-transform: translate3d(0, -30px, 0);
  transform: translate3d(0, -30px, 0);
}

figure.effect-honey h2 i {
  font-style: normal;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, -30px, 0);
  transform: translate3d(0, -30px, 0);
}

figure.effect-honey figcaption::before,
figure.effect-honey h2 {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

figure.effect-honey:hover figcaption::before,
figure.effect-honey:hover h2,
figure.effect-honey:hover h2 i {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Oscar *****/
/*---------------*/

figure.effect-oscar {
  background: -webkit-linear-gradient(45deg,
      #22682a 0%,
      #9b4a1b 40%,
      #3a342a 100%);
  background: linear-gradient(45deg, #22682a 0%, #9b4a1b 40%, #3a342a 100%);
}

figure.effect-oscar img {
  opacity: 0.9;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

figure.effect-oscar figcaption {
  padding: 3em;
  background-color: rgba(58, 52, 42, 0.7);
  -webkit-transition: background-color 0.35s;
  transition: background-color 0.35s;
}

figure.effect-oscar figcaption::before {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  border: 1px solid #fff;
  content: "";
}

figure.effect-oscar h2 {
  margin: 20% 0 10px 0;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

figure.effect-oscar figcaption::before,
figure.effect-oscar p {
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0);
  transform: scale(0);
}

figure.effect-oscar:hover h2 {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-oscar:hover figcaption::before,
figure.effect-oscar:hover p {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

figure.effect-oscar:hover figcaption {
  background-color: rgba(58, 52, 42, 0);
}

figure.effect-oscar:hover img {
  opacity: 0.4;
}

/*---------------*/
/***** Marley *****/
/*---------------*/

figure.effect-marley figcaption {
  text-align: right;
}

figure.effect-marley h2,
figure.effect-marley p {
  position: absolute;
  right: 30px;
  left: 30px;
  padding: 10px 0;
}

figure.effect-marley p {
  bottom: 30px;
  line-height: 1.5;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

figure.effect-marley h2 {
  top: 30px;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 20px, 0);
  transform: translate3d(0, 20px, 0);
}

figure.effect-marley:hover h2 {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-marley h2::after {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 4px;
  background: #fff;
  content: "";
  -webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
}

figure.effect-marley h2::after,
figure.effect-marley p {
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-marley:hover h2::after,
figure.effect-marley:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Ruby *****/
/*---------------*/

figure.effect-ruby {
  background-color: #17819c;
}

figure.effect-ruby img {
  opacity: 0.7;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}

figure.effect-ruby:hover img {
  opacity: 0.5;
  -webkit-transform: scale(1);
  transform: scale(1);
}

figure.effect-ruby h2 {
  margin-top: 20%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 20px, 0);
  transform: translate3d(0, 20px, 0);
}

figure.effect-ruby p {
  margin: 1em 0 0;
  padding: 3em;
  border: 1px solid #fff;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, 20px, 0) scale(1.1);
  transform: translate3d(0, 20px, 0) scale(1.1);
}

figure.effect-ruby:hover h2 {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-ruby:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}

/*---------------*/
/***** Milo *****/
/*---------------*/

figure.effect-milo {
  background: #2e5d5a;
}

figure.effect-milo img {
  max-width: none;
  width: -webkit-calc(100% + 60px);
  width: calc(100% + 60px);
  opacity: 1;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-30px, 0, 0) scale(1.12);
  transform: translate3d(-30px, 0, 0) scale(1.12);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

figure.effect-milo:hover img {
  opacity: 0.5;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}

figure.effect-milo h2 {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em 1.2em;
}

figure.effect-milo p {
  padding: 0 10px 0 0;
  width: 50%;
  border-right: 1px solid #fff;
  text-align: right;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

figure.effect-milo:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Dexter *****/
/*---------------*/

figure.effect-dexter {
  background: -webkit-linear-gradient(top,
      rgba(37, 141, 200, 1) 0%,
      rgba(104, 60, 19, 1) 100%);
  background: linear-gradient(to bottom,
      rgba(37, 141, 200, 1) 0%,
      rgba(104, 60, 19, 1) 100%);
}

figure.effect-dexter img {
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

figure.effect-dexter:hover img {
  opacity: 0.4;
}

figure.effect-dexter figcaption::after {
  position: absolute;
  right: 30px;
  bottom: 30px;
  left: 30px;
  height: -webkit-calc(50% - 30px);
  height: calc(50% - 30px);
  border: 7px solid #fff;
  content: "";
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

figure.effect-dexter:hover figcaption::after {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-dexter figcaption {
  padding: 3em;
  text-align: left;
}

figure.effect-dexter p {
  position: absolute;
  right: 60px;
  bottom: 60px;
  left: 60px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, -100px, 0);
  transform: translate3d(0, -100px, 0);
}

figure.effect-dexter:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Sarah *****/
/*---------------*/

figure.effect-sarah {
  background: #42b078;
}

figure.effect-sarah img {
  max-width: none;
  width: -webkit-calc(100% + 20px);
  width: calc(100% + 20px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

figure.effect-sarah:hover img {
  opacity: 0.4;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-sarah figcaption {
  text-align: left;
}

figure.effect-sarah h2 {
  position: relative;
  overflow: hidden;
  padding: 0.5em 0;
}

figure.effect-sarah h2::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
  content: "";
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

figure.effect-sarah:hover h2::after {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-sarah p {
  padding: 1em 0;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

figure.effect-sarah:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*---------------*/
/***** Zoe *****/
/*---------------*/

figure.effect-zoe figcaption {
  top: auto;
  bottom: 0;
  padding: 1em;
  height: 3.75em;
  background: #fff;
  color: #3c4a50;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

figure.effect-zoe h2 {
  float: left;
}

figure.effect-zoe p.icon-links a {
  float: right;
  color: #3c4a50;
  font-size: 1.4em;
}

figure.effect-zoe:hover p.icon-links a:hover,
figure.effect-zoe:hover p.icon-links a:focus {
  color: #252d31;
}

figure.effect-zoe p.description {
  position: absolute;
  bottom: 8em;
  padding: 2em;
  color: #fff;
  text-transform: none;
  font-size: 90%;
  opacity: 0;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
  -webkit-backface-visibility: hidden;
  /* Fix for Chrome 37.0.2062.120 (Mac) */
}

figure.effect-zoe h2,
figure.effect-zoe p.icon-links a {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
}

figure.effect-zoe p.icon-links a span::before {
  display: inline-block;
  padding: 8px 10px;
  font-family: "feathericons";
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-eye::before {
  content: "\e000";
}

.icon-paper-clip::before {
  content: "\e001";
}

.icon-heart::before {
  content: "\e024";
}

figure.effect-zoe h2 {
  display: inline-block;
}

figure.effect-zoe:hover p.description {
  opacity: 1;
}

figure.effect-zoe:hover figcaption,
figure.effect-zoe:hover h2,
figure.effect-zoe:hover p.icon-links a {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-zoe:hover h2 {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(3) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(2) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

figure.effect-zoe:hover p.icon-links a:first-child {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

/*---------------*/
/***** Chico *****/
/*---------------*/

figure.effect-chico img {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(1.12);
  transform: scale(1.12);
}

figure.effect-chico:hover img {
  opacity: 0.5;
  -webkit-transform: scale(1);
  transform: scale(1);
}

figure.effect-chico figcaption {
  padding: 3em;
}

figure.effect-chico figcaption::before {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  border: 1px solid #fff;
  content: "";
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

figure.effect-chico figcaption::before,
figure.effect-chico p {
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-chico h2 {
  padding: 20% 0 20px 0;
}

figure.effect-chico p {
  margin: 0 auto;
  max-width: 200px;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

figure.effect-chico:hover figcaption::before,
figure.effect-chico:hover p {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

@media screen and (max-width: 50em) {
  .content {
    padding: 0 10px;
    text-align: center;
  }

  .grid figure {
    display: inline-block;
    float: none;
    margin: 10px auto;
    width: 100%;
  }
}

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

body {
  background: #2f3238;
  color: #fff;
  font-weight: 400;
  font-size: 1em;
  font-family: "Raleway", Arial, sans-serif;
}

a {
  outline: none;
  color: #3498db;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #528cb3;
}

section {
  padding: 1em;
  text-align: center;
}

.content {
  margin: 0 auto;
  max-width: 1000px;
}

.content>h2 {
  clear: both;
  margin: 0;
  padding: 4em 1% 0;
  color: #484b54;
  font-weight: 800;
  font-size: 1.5em;
}

.content>h2:first-child {
  padding-top: 0em;
}

/* Header */
.codrops-header {
  margin: 0 auto;
  padding: 4em 1em;
  text-align: center;
}

.codrops-header h1 {
  margin: 0;
  font-weight: 800;
  font-size: 4em;
  line-height: 1.3;
}

.codrops-header h1 span {
  display: block;
  padding: 0 0 0.6em 0.1em;
  color: #74777b;
  font-weight: 300;
  font-size: 45%;
}

/* Demo links */
.codrops-demos {
  clear: both;
  padding: 1em 0 0;
  text-align: center;
}

.content+.codrops-demos {
  padding-top: 5em;
}

.codrops-demos a {
  display: inline-block;
  margin: 0 5px;
  padding: 1em 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}

.codrops-demos a:hover,
.codrops-demos a:focus,
.codrops-demos a.current-demo {
  background: #3c414a;
  color: #fff;
}

/* To Navigation Style */
.codrops-top {
  width: 100%;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.69em;
  line-height: 2.2;
}

.codrops-top a {
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  letter-spacing: 1px;
}

.codrops-top span.right {
  float: right;
}

.codrops-top span.right a {
  display: block;
  float: left;
}

.codrops-icon:before {
  margin: 0 4px;
  text-transform: none;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  font-family: "codropsicons";
  line-height: 1;
  speak: none;
  -webkit-font-smoothing: antialiased;
}

.codrops-icon-drop:before {
  content: "\e001";
}

.codrops-icon-prev:before {
  content: "\e004";
}

/* Related demos */
.related {
  clear: both;
  padding: 6em 1em;
  font-size: 120%;
}

.related>a {
  display: inline-block;
  margin: 20px 10px;
  padding: 25px;
  border: 1px solid #4f7f90;
  text-align: center;
}

.related a:hover {
  border-color: #39545e;
}

.related a img {
  max-width: 100%;
  opacity: 0.8;
}

.related a:hover img,
.related a:active img {
  opacity: 1;
}

.related a h3 {
  margin: 0;
  padding: 0.5em 0 0.3em;
  max-width: 300px;
  text-align: left;
}

/* Demo ad design */
body #cdawrap {
  background: none;
  top: 50px;
  border: none;
}

body #cdawrap a {
  color: #fff !important;
}

body #cda-remove {
  color: #fff;
}

@media screen and (max-width: 25em) {
  .codrops-header {
    font-size: 75%;
  }

  .codrops-icon span {
    display: none;
  }
}
</style>




