// mongodb
// npm install mongodb
const { MongoClient} = require('mongodb'); //몽고 db에 임시 데이터를 넣어둘것임
// -> node.js 형태의 import

//title, slug, image, summary, content, creator, creator_email
const initData = [
    {
        title: '여름 워크숍 안내',
        slug: 'summer-workshop',
        image: '/images/photo1.jpg',
        summary: '이번 여름에 진행되는 워크숍에 대한 안내입니다.',
        content: '안녕하세요! 저희 동아리에서는 여름을 맞이하여 워크숍을 개최합니다. 워크숍은 7월 15일부터 17일까지 진행되며, 다양한 프로그램과 활동이 준비되어 있습니다. 많은 참여 부탁드립니다.',
        creator: '박서준',
        creator_email: 'park@example.com'
    },
    {
        title: '정기 모임 일정 공지',
        slug: 'regular-meeting-schedule',
        image: '/images/photo2.jpg',
        summary: '7월 정기 모임 일정을 공지합니다.',
        content: '7월 정기 모임은 7월 10일 저녁 7시에 동아리 방에서 진행됩니다. 이번 모임에서는 신입 회원 소개와 함께 동아리 활동 계획을 논의할 예정입니다. 회원 여러분의 많은 참여 바랍니다.',
        creator: '김용호',
        creator_email: 'kim@example.com'
    },
    {
        title: '신입 회원 모집 안내',
        slug: 'new-members-recruitment',
        image: '/images/photo3.jpg',
        summary: '신입 회원을 모집합니다!',
        content: '저희 동아리에서 신입 회원을 모집합니다. 동아리 활동에 관심 있는 분들은 7월 5일까지 신청해 주세요. 신청은 온라인으로 가능합니다. 많은 관심 부탁드립니다.', // 엔터 적용하고 싶으면 따옴표 말고 백텍으로 바꿔주면 됨
        creator: '이지은',
        creator_email: 'lee@example.com'
    },
    {
        title: '동아리 회비 납부 안내',
        slug: 'membership-fee-notice',
        image: '/images/photo4.jpg',
        summary: '이번 분기 동아리 회비 납부 안내입니다.',
        content: '이번 분기 동아리 회비는 3만 원입니다. 회비 납부는 7월 20일까지 해 주시길 바랍니다. 회비는 동아리 운영과 활동에 사용됩니다.',
        creator: '장민호',
        creator_email: 'jang@example.com'
    },
    {
        title: '여름 MT 준비 모임',
        slug: 'summer-mt-preparation',
        image: '/images/photo5.jpg',
        summary: '여름 MT 준비를 위한 사전 모임 안내입니다.',
        content: '여름 MT를 위한 준비 모임이 7월 8일 저녁 6시에 진행됩니다. 참가를 희망하시는 분들은 꼭 참석해 주세요. 준비 사항과 일정에 대해 논의할 예정입니다.',
        creator: '정하나',
        creator_email: 'jeong@example.com'
    }

]

async function connectDB() {
    const url = 'mongodb+srv://admin:admin@cluster0.g94atsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const options = {};
    let connectDB;

    if(process.env.NODE_ENV === 'development') {
        if(!global._mongo) {
            global._mongo = new MongoClient(url, options).connect()
        }
        return connectDB = global._mongo
    }else {
        return connectDB = new MongoClient(url, options).connect()
    }
}
// 더미데이터 입력 (mydb 안에 group 안에 입력)
async function insertDummyData() {
    const client = await connectDB();  //url 연결
    const db = client.db('mydb') //Database 이름으로 연결
    const collection = db.collection('group') // group 컬렉션에 접근

    await collection.insertMany(initData); // 객체 배열을 전부 입력 (insertOne)
    console.log(`${result} 입력`);
}
insertDummyData()
//node 파일명