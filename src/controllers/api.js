import prisma from '../configs/prisma';
import { writeReviewOnGoogleSheet } from '../configs/googleAPI';

const responseJSON = (json) => {
    return {
        data: json,
    };
};

export const getQuestionApi = async (req, res) => {
    try{
        const {qId} = req.params;
        const {questions} = await prisma.psy.findUnique({where:{psy_id:Number(qId)}});
        res.send(responseJSON({ questions }));
    }catch(err){
        console.log(err);
        res.sendStatus(503);
    }
};

export const postQuestionApi = async (req, res) => {
    const {qId} = req.params;
    const { data } = req.body;
    try{
        const { questions } = await prisma.psy.findUnique({where:{psy_id:Number(qId)}});
        const {answers} = await prisma.psy_result.findFirst({where:{psy_id:Number(qId)}});

        if(questions.length !== data.length) throw Error("데이터 개수가 일치하지 않음");

        const scores = Array(answers.length).fill(0);
        data.forEach((elem,idx)=>{
            const {aId, weight} = questions[idx];
            scores[Number(aId)] += data ? Number(weight) : Number(-weight);
        });
    
        // 가장 많은 득점을 한 첫번째 인덱스를 찾아서 반환
        const maxValue = Math.max(...scores);
        const resultParam = scores.findIndex((elem) => elem === maxValue);
        console.log(scores, resultParam);
    
        res.send(responseJSON({ result: resultParam }));
    }catch(err){
        console.log(err);
        res.sendStatus(503);
    }
};

export const postReview = async (req, res) => {
    const {qId} = req.params;
    const { data: review_content } = req.body;
    try {
        writeReviewOnGoogleSheet(review_content);
        await prisma.psy_review.create({
            data: {
                psy_id:Number(qId),
                review_content,
            },
        });
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(503);
    }
};
