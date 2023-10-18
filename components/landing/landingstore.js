import Twitter from '../../assets/images/icons/twitter.svg'
import LinkedIn from '../../assets/images/icons/linkedin.svg'
import mentor1 from '../../assets/images/homepage/mentorman.png'
import mentor2 from '../../assets/images/homepage/mentorlady.png'
import cardify from '../../assets/images/icons/cardify.svg'
import propel from '../../assets/images/icons/propel.svg'
import clickpay from '../../assets/images/icons/clickpay.svg'
import bootcamp from '../../assets/images/homepage/bootcamp.png'
import wale from '../../assets/images/homepage/wale.png'
import vang from '../../assets/images/homepage/vang.png'

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
		mentorname: "Sam Femi",
		job: "Product management mentor",
		socialicon: LinkedIn,
		socialhandle: "Thesamfemi" 
	},
	{
		id: 2,
		picture: mentor2,
		mentorname: "Sam Femi",
		job: "Product design mentor",
		socialicon: LinkedIn,
		socialhandle: "Thesamfemi" 
	},
	{   id: 3,
		picture: mentor2,
		mentorname: "Sam Femi",
		job: "Data analytics mentor",
		socialicon: LinkedIn,
		socialhandle: "Thesamfemi" 
	},
	{   
		id: 4,
		picture: mentor2,
		mentorname: "Sam Femi",
		job: "Product management mentor",
		socialicon: LinkedIn,
		socialhandle: "Thesamfemi" 
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