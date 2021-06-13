import { Router } from 'express';

const router = new Router();

const questions = (question, answers) => ({ question, answers });

router.get('/:id', (req, res) =>
    res.render('index', {
        contentHeader: '브레이브걸스 테스트',
        contentBody: '내가 제일 좋아하는 브레이브걸스는?',
        contents: [
            questions('당신이 울음이 나는 상황은?', [
                '일이 잘 풀리지 않아서 운다',
                '웃고있지만 속으로 운다',
                '양파를 썰다가 운다',
                '인간극장을 보며 운다',
                '자식이 뿌듯할때 운다',
            ]),
            questions('사랑을 표현하는 방식은?', [
                '좋아하는 이유를 장황하게 설명함',
                '만난지 1주일만에 술김에 말함',
                '상대가 못읽는 암호편지를 줌',
                '손을 꼭 붙잡고 눈을 보고 말함',
                '툴툴 대면서 다 해준다',
            ]),
            questions('친구와 쇼핑할때 당신의 유형', [
                '브랜드의 역사, 스타일등을 열변함',
                '많이 물어보지만 답정너',
                '직원이 뭔가 물어볼까 빠르게 쇼핑',
                '사장님과 수다 삼매경',
                '내것보단 남의 것을 먼저',
            ]),
            questions('당신의 단점', [
                '자신을 너무 사랑하고 다른 사람도 다 자신을 좋아한다고 생각함',
                '친목을 너무 좋아함.',
                '세상이 다 불만이고 맘에 안듬',
                '오지랖이 너무 심함. 자기가 손해를 봄',
                '험악하게 생긴 얼굴',
            ]),
            questions('당신을 한마디로 표현하자면?', [
                '뒤끝없는 세상쿨함',
                '예리한 현실주의자',
                '매드사이언티스트',
                '의욕만땅 열혈가이',
                '겉차속따 츤데레',
            ]),
        ],
    }),
);
router.get('/:id/:result', (req, res) =>
    res.render('index', {
        contentHeader: '브레이브걸스 테스트',
        contentBody: '내가 제일 좋아하는 브레이브걸스는?',
    }),
);

export default router;
