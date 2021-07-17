const getResultObject = (type, description) => ({
    placeholder: 'Kamu dari',
    type,
    description,
    imgUrl: `/public/img/indonesianTest/results/${type.toLowerCase()}.png`,
});

const results = [
    getResultObject(
        'Sumatra',
        'Anda orang yang mandiri.\nAnda ingin memiliki jarak dengan orang lain.\nTapi tidak bermksud anda introvert.\nSuara Anda keras dan Anda dapat mengatakan apa yang Anda inginkan dengan baik.\nAnda hanya hanya menginginkan ruang hanya untuk Anda atau bersama pasangan atau keluarga.',
    ),
    getResultObject(
        'Java',
        'Anda orang yang santun.\nAnda selalu menyapa dahulu dengan orang yang pertama kali Anda lihat.\nAnda  merasa sungkan saat seseorng memberimu sesuatu.\nOrang-orang suka dengan kebaikanmu.\nMenjaga tradisi itu penting bagimu,terkdang  Anda mendapat konflik karena ini Anda orang yang santun.\nAnda selalu menyapa dahulu dengan orang yang pertama kali Anda lihat.\nAnda  merasa sungkan saat seseorng memberimu sesuatu.\nOrang-orang suka dengan kebaikanmu.\nMenjaga tradisi itu penting bagimu,terkdang  Anda mendapat konflik karena ini.',
    ),
    getResultObject(
        'Sulawesi',
        'Anda  orang yang pemberani.\nAnda bersedia untuk berpartisipasi dalam perjuangan orang lain dan membantu orang yang memiliki pikiran yang sama dengan Anda.\nAnda juga keras kepala.\nTetapi jika Anda mendorong ke arah yang benar, Anda akan mendapatkan hasil yang baik.',
    ),
    getResultObject(
        'Papua',
        'Anda adalah orang yang material.\nAnda memastikan itu untung atau tidak sebelum membantu orang lain.\nAnda terbuka untuk setiap orang. \nOrang akan berpikir Anda adalah aliansi yang baik.\nAnda juga memiliki ketangkasan yang baik, jadi Anda pandai membuat kerajinan tangan.',
    ),
    getResultObject(
        'Bali',
        'Anda seorang pasifis.\nAnda tidak suka kekerasan, Anda menikmati hidup Anda dengan damai.\nAnda selalu bersikap tenang dan sopan kepada orang lain.\nOrang-orang berpikir nyaman berteman dengan anda dan menyukai Anda.',
    ),
];

const questionContent = {
    header: 'Dari pulau mana saya berasal?',
    imgUrl: '/public/img/indonesianTest/thumb.png',
    description:
        'Mari temukan dari pulau mana kamu berasal!\nJawab 15 pertanyaan ini, kamu akan mengetahui dari pulau mana kamu berasal.\nIni hanya untuk bersenang senang',
    notice: '※ Ini hanya untuk bersenang-senang',
};

export const getQuestion = (req, res) => {
    const { qId } = req.params;
    res.render('psychotest', {
        common: {},
        content: questionContent,
    });
};

export const getResult = (req, res) => {
    const { qId, aId } = req.params;
    res.render('result', {
        common: {},
        content: {
            qId: qId,
            aId: aId,
            ...results[aId],
        },
    });
};
