/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shreyans's Portfolio",
  description:
    "Eager to push the boundaries of innovation and embrace continuous learning in the ever-evolving technology landscape. Enthusiastic about deep learning and quantum computing with a drive for staying at the forefront of advancements in these fields",
  og: {
    title: "Shreyans Jain Portfolio",
    type: "website",
    url: "http://shreyansjain.com/",
  },
};

//Home Page
const greeting = {
  title: "Shreyans Jain",
  logo_name: "ShreyansJain",
  nickname: "",
  subTitle:
    "Eager to push the boundaries of innovation and embrace continuous learning in the ever-evolving technology landscape. Enthusiastic about deep learning and quantum computing with a drive for staying at the forefront of advancements in these fields",
  resumeLink:
    "https://drive.google.com/file/d/1FvdA8A092zTxNX_kB7BkA7fTL5MLrjuf/view?usp=sharing",
  portfolio_repository: "https://github.com/Shreyans06/LANGCHAIN-DEMO",
  githubProfile: "https://github.com/Shreyans06",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Shreyans06",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shreyans06",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:shreyanskjain06@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shreyans_jain06",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable and high quality models for various deep learning use cases",
        "⚡ Experience of working in Computer Vision and a handful NLP projects",
        "⚡ Proficiency in applying statistical methods for data modeling and conducting in-depth analysis to extract valuable insights",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#EE4C2C",
          },
        },
      ],
    },
    {
      title: "Quantum Computing",
      fileName: "QCImg",
      skills: [
        "⚡ Recently delved into the fascinating realm of Quantum Computing",
        "⚡ Exploring the synergy at the intersection of diverse fields within Quantum Computing",
        "⚡ Actively engaged in the IBM Qiskit Summer School to deepen my understanding and gain practical insights in this field",
      ],
      softwareSkills: [
        {
          skillName: "Qiskit",
          fontAwesomeClassname: "simple-icons:qiskit",
          style: {
            color: "#6929C4",
          },
        },
        // {
        //   skillName: "",
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/shreyanskjain06/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#00EA64",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/shreyansjain06",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arizona State University",
      subtitle: "Master of Science in Computer Science",
      logo_path: "asu_logo.png",
      alt_name: "ASU , Tempe",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I studied subjects related to AI and machine learning",
        "⚡ In addition to the aforementioned, I have undertaken courses in Algorithms, Cloud Computing , Image and Video Processing",
        "⚡ My current CGPA : 3.90",
      ],
      website_link: "https://www.asu.edu/",
      transcript_link:
        "https://drive.google.com/file/d/1GfocKskVKmLjULZJETEtZdSljI020pE1/view?usp=drive_link",
    },
    {
      title: "Visvesvaraya Technological University",
      subtitle: "Bachelor of Engineering in Computer Science & Engineering",
      logo_path: "vtu_logo.png",
      alt_name: "Visvesvaraya Technological University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ Volunteered enthusiastically at various college events and festivals, fostering a vibrant and inclusive campus community.",
        "⚡ My Overall CGPA : 7.75",
      ],
      website_link: "https://vtu.ac.in/en/",
      transcript_link:
        "https://drive.google.com/file/d/1GeCKUbdm-IWgri0lazuwc0YvX3vOnY79/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Qiskit Global Summer School 2023",
      subtitle: "- IBM Qiskit",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/91595da4-ba10-4df3-ac29-14548e7e38dd/public_url",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Mathematics for Machine Learning: Linear Algebra",
      subtitle: "- David Dye",
      logo_path: "imperial_college.png",
      certificate_link:
        "https://coursera.org/share/914b12b1dc6a9a6353d971ad24e9e833",
      alt_name: "imperial college london",
      color_code: "#44a3fc",
    },
    {
      title: "IBM Quantum Challenge Africa 2021 - Advanced",
      subtitle: "- IBM Qiskit",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/a29b6cf8-d27b-4d71-ab7c-bc78407e8c2f/public_url",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Qiskit Global Summer School 2021",
      subtitle: "- IBM Qiskit",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10mdejzCoTe6fqV3eGETdBXy1HhjtZlWN/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "IBM Quantum Challenge 2021 - Foundational",
      subtitle: "- IBM Qiskit",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/b9c0679e-4e2e-43e1-a55f-46c2bb1d776b/public_url",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/shreyansjain/transcript/vpl2xa24zm29rk6",
      alt_name: "Google",
      color_code: "#D83B0199",
    },
    {
      title: "Convolutional Neural Network",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/bf751640b37802507c7e9d6b68db12dc",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/0d34f3819d2d5f58e1ff872b1dab3deb",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/49a1933c47cf44db0518fdcf5cca3efd",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/8d0637718379bb48a4b064945ea68c8b",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/10mdejzCoTe6fqV3eGETdBXy1HhjtZlWN/view?usp=sharing",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've worked on machine learning and deep learning projects. With a rich blend of academic and professional experiences, I'm poised to bring a practical approach to new challenges.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Application Development Analyst",
          company: "Accenture Solutions Pvt Ltd ",
          company_url: "https://www.accenture.com/us-en",
          logo_path: "accenture_logo.png",
          duration: "June 2022 - September 2022",
          location: "Bengaluru , India",
          description:
            "I conducted an extensive literature review focused on exploring effective techniques for mitigating biases in facial detection algorithms. Subsequently, I implemented a Python pipeline, strategically incorporating the concept of semi-supervised variational auto-encoders. This innovative approach allowed me to delve into the intricacies of bias discovery within the dataset. By leveraging learned latent features, I gained valuable insights into the underlying biases and comprehensively understood the nuances of feature representations. This hands-on experience not only honed my technical skills but also heightened my awareness of the critical importance of addressing biases in machine learning applications, particularly in facial detection algorithms.",
          color: "#a100fe",
        },
        {
          title: "Application Development Associate",
          company: "Accenture Solutions Pvt Ltd ",
          company_url: "https://www.accenture.com/us-en",
          logo_path: "accenture_logo.png",
          duration: "November 2020 - May 2022",
          location: "Bengaluru , India",
          description:
            "I effectively managed a Java backend using Spring and Spring Boot, implementing robust systems for the efficient handling of student data. Through strategic optimizations, I significantly enhanced data retrieval speed, contributing to a more streamlined and responsive backend infrastructure. Additionally, I demonstrated my commitment to academic excellence by securing an impressive 95% in a deep learning course offered as part of an upskilling program at Accenture. This achievement not only showcased my strong theoretical foundation but also equipped me with practical skills and applied expertise. Leveraging this knowledge, I actively contributed to internal projects, demonstrating the seamless integration of theoretical concepts into real-world applications within the dynamic field of deep learning.",
          color: "#a100fe",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Engineer Intern",
          company: "NETSCOUT Systems Software India Pvt Ltd",
          company_url: "https://www.netscout.com/",
          logo_path: "netscout_logo.png",
          duration: "July 2019 - August 2019",
          location: "Bengaluru , India",
          description:
            "I developed a robust solution focused on analyzing and detecting outliers in data received from various sensors. The process involved a systematic approach, beginning with comprehensive data pre-processing to ensure the quality and relevance of the dataset. Following this, I conducted intricate feature extraction, identifying key variables essential for the subsequent analysis. To enhance the outlier detection process, I employed two diverse clustering algorithms, namely Kmeans and DBSCAN. Leveraging the strengths of Kmeans for centroid-based clustering and DBSCAN for density-based clustering, the solution offered a comprehensive and accurate identification of outliers within the dataset. This meticulous approach not only showcased my proficiency in data analysis but also demonstrated a strategic utilization of different clustering techniques to address the specific challenges posed by outlier detection in sensor data.",
          color: "#97d700",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Passionate about spearheading innovative projects, I specialize in developing models for diverse deep learning and statistical applications . My overarching goal is to create scalable and production-ready systems deployable through cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shreyans.png",
    description:
      "I am open to collaborating on intriguing projects in deep learning. Feel free to reach out to me through any of my social media platforms, and I will respond promptly.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
