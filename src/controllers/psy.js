const getResultObject = (type, description) => ({
    type,
    description,
});

const results = [
    getResultObject(
        'Sumatra',
        'Anda orang yang mandiri, Anda ingin memiliki jarak dengan orang lain, tapi tidak bermksud anda introvert, Suara Anda keras dan Anda dapat mengatakan apa yang Anda inginkan dengan baik.Anda hanya hanya menginginkan ruang hanya untuk Anda atau bersama pasangan atau keluarga.',
    ),
    getResultObject(
        'Java',
        'Anda orang yang santun, Anda selalu menyapa dahulu dengan orang yang pertama kali Anda lihat, Anda  merasa sungkan saat seseorng memberimu sesuatu, orang orang suka dengan kebaikanmu , menjaga tradisi itu penting bagimu,terkdang  Anda mendapat konflik karena ini ',
    ),
    getResultObject(
        'Sulawesi',
        'Anda  orang yang pemberani, Anda bersedia untuk berpartisipasi dalam perjuangan orang lain dan membantu orang yang memiliki pikiran yang sama dengan Anda.\nAnda juga keras kepala. Tetapi jika Anda mendorong ke arah yang benar, Anda akan mendapatkan hasil yang baik.',
    ),
    getResultObject(
        'Papua',
        'Anda adalah orang yang material.\nAnda memastikan itu untung atau tidak sebelum membantu orang lain. Anda terbuka untuk setiap orang. Orang akan berpikir Anda adalah aliansi yang baik.\nAnda juga memiliki ketangkasan yang baik, jadi Anda pandai membuat kerajinan tangan ',
    ),
    getResultObject(
        'Bali',
        'Anda seorang pasifis\nAnda tidak suka kekerasan, Anda menikmati hidup Anda dengan damai.\nAnda selalu bersikap tenang dan sopan kepada orang lain.\nOrang-orang berpikir nyaman berteman dengan anda dan menyukai Anda.',
    ),
];

export const getQuestion = (req, res) => {
    res.render('psychotest', {
        contentHeader: 'memuat tes asal',
        contentDescription: 'Dari pulau mana kamu berasal?',
    });
};

export const getResult = (req, res) => {
    const { id } = req.params;
    res.render('result', {
        contentHeader: 'You came from',
        imgURL: '',
        content: results[id],
        contentBody: '내가 제일 좋아하는 브레이브걸스는 누구입니다!',
    });
};
