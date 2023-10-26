const aboutComcamp =
	'ค่ายยุวชนคอมพิวเตอร์ หรือ คอมแคมป์ สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้เป็นกิจกรรมที่จัดขึ้นโดยสาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้เพื่อเปิดโอกาสให้น้องๆที่สนใจในสาขาวิทยาการคอมพิวเตอร์ได้มีโอกาสเรียนรู้และฝึกฝนทักษะด้านคอมพิวเตอร์อย่างสนุกสนานเป็นเวลา 3 วัน 2 คืน โดยในปี พ.ศ. 2567 จัดขึ้นระหว่างวันที่ 2-4 กุมภาพันธ์ ณ มหาวิทยาลัยแม่โจ้ จังหวัดเชียงใหม่';

const learningObjectives = [
	{
		punchline: 'Mobile Development',
		body: 'ชอบเล่นเกม? ทำไมเราไม่ลองสร้างเกมมาเล่นเองกันบ้างหล่ะ? เรียนรู้การสร้างเกมเบื้องต้นด้วย Unity และ C# กันเถอะ แล้วลองสร้างเกมของตัวเองมาเล่นกัน แล้วเราจะได้เป็นคนสร้างเกมที่เราอยากเล่น และ สร้างเกมที่เราอยากให้คนอื่นเล่นกันเถอะ'
	},
	{
		punchline: 'IOT & Microcontroller',
		body: 'ชอบเล่นเกม? ทำไมเราไม่ลองสร้างเกมมาเล่นเองกันบ้างหล่ะ? เรียนรู้การสร้างเกมเบื้องต้นด้วย Unity และ C# กันเถอะ แล้วลองสร้างเกมของตัวเองมาเล่นกัน แล้วเราจะได้เป็นคนสร้างเกมที่เราอยากเล่น และ สร้างเกมที่เราอยากให้คนอื่นเล่นกันเถอะ'
	},
	{
		punchline: 'Web Development',
		body: 'ชอบเล่นเกม? ทำไมเราไม่ลองสร้างเกมมาเล่นเองกันบ้างหล่ะ? เรียนรู้การสร้างเกมเบื้องต้นด้วย Unity และ C# กันเถอะ แล้วลองสร้างเกมของตัวเองมาเล่นกัน แล้วเราจะได้เป็นคนสร้างเกมที่เราอยากเล่น และ สร้างเกมที่เราอยากให้คนอื่นเล่นกันเถอะ'
	},
	{
		punchline: 'Artificial Intelligence & Machine Learning',
		body: 'ชอบเล่นเกม? ทำไมเราไม่ลองสร้างเกมมาเล่นเองกันบ้างหล่ะ? เรียนรู้การสร้างเกมเบื้องต้นด้วย Unity และ C# กันเถอะ แล้วลองสร้างเกมของตัวเองมาเล่นกัน แล้วเราจะได้เป็นคนสร้างเกมที่เราอยากเล่น และ สร้างเกมที่เราอยากให้คนอื่นเล่นกันเถอะ'
	}
];

const benefits = [
	{
		punchline: 'เรียนจากมือโปร',
		body: 'เรียนกับอาจารย์ที่มีประสบการณ์และเชี่ยวชาญ',
		pic: 'src/lib/assets/teacher_2.png'
	},
	{
		punchline: 'ลงมือทำจริง',
		body: 'ฝึกฝนทักษะผ่านกิจกรรมและโครงงาน',
		pic: 'src/lib/assets/pencil.png'
	},
	{
		punchline: 'ได้เพื่อนใหม่',
		body: 'พบปะเพื่อนนักเรียนที่สนใจวิทยาการคอมพิวเตอร์',
		pic: 'src/lib/assets/people_talking.png'
	},
	{
		punchline: 'สนุกไปกับการเรียนรู้',
		body: 'เรียนรู้วิทยาการคอมพิวเตอร์อย่างสนุกสนาน',
		pic: 'src/lib/assets/laugh.png'
	}
];

const timeline = [
	{
		date: new Date('2023-10-31'),
		title: 'เปิดรับสมัคร'
	},
	{
		date: new Date('2023-12-30'),
		title: 'ปิดรับสมัคร'
	},
	{
		date: new Date('2024-01-01'),
		title: 'ประกาศรายชื่อ'
	},
	{
		date: new Date('2024-01-25'),
		title: 'เปิดค่าย'
	},
	{
		date: new Date('2024-01-27'),
		title: 'ปิดค่าย'
	}
];

const stats = [
	{
		title: 'คอมแคมป์รุ่น',
		value: 22,
		increase: 1,
		initValue: '10',
		symbol: 'nd',
		imgBg: 'src/lib/assets/red-flag.png',
		subtitle: 'คอมแคมป์ของเราถูกตั้งขึ้นครั้งแรกเมื่อปี พ.ศ 2543'
	},
	{
		title: 'จำนวนผู้สมัครทั้งหมด',
		value: 2300,
		increase: 10,
		initValue: '2200',
		symbol: '',
		imgBg: 'src/lib/assets/student.png',
		subtitle: 'จำนวนน้อง ๆ ที่เคยสมัครทั้งหมดตั้งแต่รุ่นแรก'
	},
	{
		title: 'จำนวนการตอบรับ',
		value: 95,
		increase: 5,
		initValue: '50',
		symbol: '%',
		imgBg: 'src/lib/assets/cheer-up.png',
		subtitle: 'จำนวนน้อง ๆ ที่ให้ฟิตแบตแก่ค่ายของเรา'
	}
];

const review = [
	{
		comment: 'ค่ายนี้ดีสุด ๆ เข้าใจง่าย สนุกสนาน เป็นกันเอง แนะนำเลยไม่ผิดหวัง',
		name: 'นาย สมชาย ใจดี',
		role: 'นักเรียนชั้นมัธยมศึกษาปีที่ 4',
		gen: 'เด็กคอมแคมป์รุ่นที่ 21',
		image: 'src/lib/assets/boy_2.png'
	},
	{
		comment: 'ค่ายนี้ดีสุด ๆ เข้าใจง่าย สนุกสนาน เหมาะกับน้อง ๆ ที่สนใจคอมพิวเตอร์ ตวรมาอย่างมาก',
		name: 'นาย สมชาย ใจดี',
		role: 'นักเรียนชั้นมัธยมศึกษาปีที่ 4',
		gen: 'เด็กคอมแคมป์รุ่นที่ 21',
		image: 'src/lib/assets/girl_2.png'
	},
	{
		comment:
			'ค่ายนี้สนุกมาก ได้ทั้งความรู้และประสบการณ์ อาจารย์และรุ่นต่างใจดีและสอนดี พี่แนะนำว่าน้อง ๆ ไม่ควรพลาดค่ะ',
		name: 'นางสาว สุดใจ รักสัตว์',
		role: 'นักเรียนชั้นมัธยมศึกษาปีที่ 3',
		gen: 'เด็กคอมแคมป์รุ่นที่ 20',
		image: 'src/lib/assets/girl.png'
	}
];

const faq = [
	{
		question: 'ค่ายนี้เหมาะกับใคร?',
		answer: 'น้องๆ ที่สนใจในสาขาวิทยาการคอมพิวเตอร์ และอยากเรียนรู้เพิ่มเติม'
	},
	{
		question: 'ค่ายนี้มีค่าใช้จ่ายไหม?',
		answer: 'ค่ายนี้ไม่มีค่าใช้จ่ายใดๆ ทั้งสิ้น'
	},
	{
		question: 'ค่ายนี้จัดที่ไหน?',
		answer: 'ค่ายนี้จัดที่มหาวิทยาลัยแม่โจ้ จังหวัดเชียงใหม่'
	},
	{
		question: 'ค่ายนี้มีกิจกรรมอะไรบ้าง?',
		answer:
			'ค่ายนี้มีกิจกรรมหลักๆ อยู่ 3 ส่วน ได้แก่ การเรียนการสอน การฝึกฝนทักษะ และการสร้างโครงงาน'
	},
	{
		question: 'ไม่มีพื้นฐานทางด้านคอมพิวเตอร์เลย สามารถมาสมัครได้มั้ยครับ?',
		answer:
			'ไม่จำเป็นต้องมีความรู้พื้นฐานอะไรมาก่อน แต่ถ้ามีความรู้พื้นฐานอยู่แล้วก็จะเป็นประโยชน์ต่อการเรียนรู้ในค่าย'
	},
	{
		question: 'ต้องเตรียมอุปกรณ์อะไรมาบ้าง?',
		answer:
			'ต้องเตรียมคอมพิวเตอร์ส่วนตัวมาเอง และ ต้องมีโปรแกรม Visual Studio Code ติดตั้งในคอมพิวเตอร์ส่วนตัวด้วย'
	},
	{
		question: 'ค่ายนี้จัดการเรียนการสอนอะไรบ้างคะ',
		answer:
			'ค่ายนี้จัดการเรียนการสอนในสาขาวิทยาการคอมพิวเตอร์ โดยจะมีการเรียนรู้ในหลายๆ ด้าน ได้แก่ การสร้างเกม การพัฒนาเว็บไซต์ การพัฒนาโปรแกรม การพัฒนาแอปพลิเคชัน การพัฒนาโปรแกรมด้วยภาษา Python และ การพัฒนาโปรแกรมด้วยภาษา C#'
	},
	{
		question: 'ค่ายนี้จัดแบบค้างคืนหรือปล่าวครับ แล้วพักที่ไหนครับ',
		answer: 'ค่ายนี้จัดแบบค้างคืน และ จัดที่มหาวิทยาลัยแม่โจ้ จังหวัดเชียงใหม่'
	},
	{
		question: 'การเข้าค่ายในครั้งนี้ จะได้รับเกียรติบัตรหรือประกาศนียบัตรอะไรมั้ยครับ',
		answer: 'ใด้ค่ะ น้อง ๆ ที่เข้าร่วมค่ายจะได้รับเกียรติบัตร หรือ ประกาศนียบัตรค่ายกันทุกคนค่ะ'
	},
	{
		question: 'ค่ายนี้มีเกณฑ์การรับคน หรือการสมัครอย่างไรบ้างคะ',
		answer:
			'เกณฑ์การคัดเลือกจะพิจารณาจากความถูกค้องที่ระบุในการสมัครต่ะ ถ้าน้องกรอกข้อมูลที่ระบุในการสมัครครบถ้วนก็เข้าร่วมกับทางค่ายได้เลยค่ะ จนกว่าจะเต็มจำนวนที่รับสมัครไว้'
	}
];

export { aboutComcamp, learningObjectives, benefits, timeline, faq, stats, review };
