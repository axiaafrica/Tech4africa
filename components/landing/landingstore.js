import Twitter from '../../assets/images/icons/twitter.svg'
import LinkedIn from '../../assets/images/icons/linkedin.svg'
import mentor1 from '../../assets/images/mentors/peace.png'
import mentor3 from '../../assets/images/mentors/bose.png'
import mentor4 from '../../assets/images/mentors/best.png'
import mentor2 from '../../assets/images/mentors/fawaz.png'
import cardify from '../../assets/images/icons/cardify.svg'
import propel from '../../assets/images/icons/propel.svg'
import clickpay from '../../assets/images/icons/clickpay.svg'
import bootcamp from '../../assets/images/homepage/bootcamp.png'
import wale from '../../assets/images/homepage/wale.png'
import vang from '../../assets/images/homepage/vang.png'
import Network from "@/assets/images/icons/networking.svg";
import Admission from "@/assets/images/icons/admission.svg";
import Success from "@/assets/images/icons/success.svg";
import Mentorship from "@/assets/images/icons/mentorship.svg";
import marketing from "@/assets/images/homepage/dmarketing.png"
import design from "@/assets/images/homepage/pdesign.png"
import dev from "@/assets/images/homepage/fdev.png" 
import analysis from "@/assets/images/homepage/danalysis.png"
import manage from "@/assets/images/homepage/pmanage.png"

export const courses = [
	{
		img: marketing,
		title: 'Digital Marketing',
		desc: "Explore strategies for marketing products on digital platforms"
	},
	{
		img: design,
		title: 'Product Design',
		desc: "Develop user-friendly applications, websites, and digital interfaces."
	},
    {
		img: dev,
		title: 'Frontend Developement',
		desc: "Gain hands-on experience in coding and building the user interfaces."
	},
    {
		img: analysis,
		title: 'Data Analytics',
		desc: "Explore data  analysis and make informed decisions based on data-driven insights."
	},
	{
		img: manage,
		title: 'Product Management',
		desc: "Discover the fundamentals of managing tech products from ideation to launch."
	}
]

export const contribute = [
	{
		img: Network,
		title: 'Networking Opportunities',
		desc: "Connect with like-minded individuals, fellow participants in the tech industry. Forge valuable connections that can open doors to exciting career prospects within Africa's vibrant tech ecosystem."
	},
	{
		img: Admission,
		title: 'Free Admission',
		desc: "We believe in equal access to opportunities. That's why this extraordinary boot camp comes to you completely free of charge. Take advantage of this unparalleled chance to upskill yourself without any financial burden."
	},
    {
		img: Success,
		title: 'Proven Success',
		desc: "Individuals who believe in the bootcamp's mission can provide financial support through donations or sponsorships. Their contributions can fund scholarships, resources, or specific program elements."
	},
    {
		img: Mentorship,
		title: 'Mentorship & Guardiance',
		desc: "TFA has sourced out for the best mentors in an of your preferred industry, experienced educators who will guide you on your learning journey. Benefit from their wealth of knowledge, practical insights, and insider tips to accelerate your growth and success."
	},
]

export const blogs = [
	{
	 id: 1,
	 picture: wale,
	 date: '23 Mar 2023',
     author: "By Samuel Mungadze",
     title: "Nigeria’s Axia Africa hosts free tech skills training camp"
	},
	{
	 id: 2,
	 picture: vang,
	 date: '23 Mar 2023',
	 author: "Vanguard News",
	 title: "Edtech firm organizes bootcamp to empower Africa’s innovators."
	}
]
export const editions = [
	{
	 edition: '1st',
	 sponsor: [clickpay],
     summery: "The partnership between the Tech for Africa Bootcamp and ClickPay was a significant collaboration that had a positive impact on the bootcamp's participants. ClickPay, a payment processing platform, played a vital role in supporting the bootcamp and enhancing the learning experience for participants.",
     image: bootcamp
	},
	{
	 edition: '2nd',
	 sponsor: [propel, cardify],
	 summery: "Tech for Africa Bootcamp by Axia Africa provide individuals with first-hand knowledge and practical skills necessary to kickstart their journey in the tech industry.",
	 image: bootcamp
	}
]
export const mentors = [
	{   
		id: 1, 
      picture: mentor1,
      mentorname: "Chioma Peace Udoh",
      job: "Product management mentor",
      socialicon: LinkedIn,
      socialUrl: "https://www.linkedin.com/in/chioma-peace-udoh/",
      socialhandle: "Chioma Peace"
	},
	{
		id: 2,
		picture: mentor2,
		mentorname: "Fawaz Ibrahim (The best ibrahim)",
		job: "Product design mentor",
		socialicon: LinkedIn,
		socialUrl: "https://www.linkedin.com/in/fawaz-ibrahim-320826222/",
		socialhandle: "Fawaz Ibrahim",
	},
	{   id: 3,
		picture: mentor3,
		mentorname: "Abosede Teniola",
		job: "Data Analytics mentor",
		socialicon: LinkedIn,
		socialUrl: "https://www.linkedin.com/in/abosede-teniola-7a56b5238/",
		socialhandle: "Abosede Teniola", 
	},
	{   
		id: 4,
		picture: mentor4,
        mentorname: "Best Kosisochukwu",
        job: "Product management mentor",
        socialicon: LinkedIn,
        socialUrl: "https://www.linkedin.com/in/best-kosisochukwu-97b288142/",
        socialhandle: "Best Kosisochukwu", 
	}
]

export const cards = [
	{
		comment: "Today's class was simply fantastic! I am extremely grateful for the invaluable knowledge and insights I have gained in front-end development. The bootcamp has been an amazing experience so far, and I'm excited to work on my project and showcase my newly acquired skills.",
		name: 'Emmzycode',
        icon: Twitter
	},
	{
		comment: "Day 8 of #axiaafricatechbootcamp The experience of this bootcamp has been amazing and wonderful. I appreciate Axia Africa and have learned a lot so far. We learned about how to build a storage website with HTML and CSS today. Thank you @axiaafrica",
		name: 'Umolo Blessing Johnson',
        icon: Twitter
	},
	{
		comment: 'Axia Africa has been so helpful to me. I got into tech with zero knowledge of it, didn’t even know my way around a good system. But right now, I know more than I would’ve imagined that I can before I got into the academy. Very helpful, kind, patient and thoughtful teachers too. This training has really helped me! I highly recommend it! Thank youuu.',
		name: 'Miracle Okechi',
        icon: Twitter
	},
	{
		comment: "After a successful completion of a 2weeks Data Analytics Bootcamp at Axia Africa where I learned data cleaning, sorting and worked on a project with my fellow group members, I was issued a certificate of attendance and completion.I want to appreciate Axia Africa for this opportunity as this birthed a growing passion to pursue the tech skill fully and be a professional in the long run.One down, many more to go",
		name: 'Taiye Akinlotan',
        icon: LinkedIn
	},
	{
		comment: "I’m excited to announce that I enrolled for the one week bootcamp for tech skills at Axia Africa.I’m currently studying in the Frontend development track. Yesterday was day 1- Introduction to Frontend Development, it was a really insightful and educative session. Lessons continue today and I’m very much anticipating!",
		name: 'Precious Irabor',
        icon: LinkedIn
	},
	{
		comment: "Tech Boot Camp!!! Started a 2weeks tech boot camp at Axia Africa yesterday 27th March 2023. Today being Day 2! It has been awesome so far, the lectures, presentation everything in total.. Learnt about the fundamental principles of UX Designs yesterday and today, we learnt",
		name: 'Lilian',
        icon: Twitter
	},
	{
		comment: 'Today was a great day being the day of the training which I learnt about Digital Analysis. We were taken through the foundation of analysis where we were taught the principles Data analysis Wich includes EGA (Explain,Gather and Analyse)',
		name: 'Totori',
        icon: Twitter
	},
    {
		comment: 'Thank you Axia Africasuccessfully completed my bootcamp and trust me I learnt a lotfrom our mentors to the students. was really worth it!',
		name: 'Blessing Lotanna',
        icon: LinkedIn
	},
    {
		comment: "As a newbie in tech, I've gone from no prior knowledge to having a substantial amount of knowledge on Product Design...This is all thanks to @axiaafrica & various mentors..I'm grateful for the opportunity to be part of this great achievement",
		name: 'Peter Ella',
        icon: Twitter
	},
    {
		comment: "Started my Web development journey with @axiaafrica today and it was so interesting. Day 1 I was introduced to Web development and the tools needed. Can't wait for Day 2, more interesting details to cover about the course",
		name: 'Glory',
        icon: Twitter
	},
]