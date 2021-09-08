import '../../../css/mixins/socialMediaShareBlock/index.sass';
import './refineCSS';

document.getElementById('chatbubbleYes').addEventListener('click', () => {
    document.querySelector('.addthis_section--share-toolbox').style.display =
        'block';
    document.querySelector('.chatbubble__body--text > p').textContent =
        'Bagaimana jika anda membagikan ini ke teman anda?';
    document.querySelector('.chatbubble__body--control.f-r').style.display =
        'none';
    document.querySelector('.promote-sharing__character > img').src =
        'https://storage.googleapis.com/pwm-res/web/result/result_promote_share_character_after.png';
});
document.getElementById('chatbubbleNo').addEventListener('click', (e) => {
    document.querySelector('.addthis_section--share-toolbox').style.display =
        'block';
    document.querySelector('.chatbubble__body--text > p').textContent =
        'Jika anda ingin membagikan hasil, gunakan ini!';
    document.querySelector('.chatbubble__body--control.f-r').style.display =
        'none';
    document.querySelector('.promote-sharing__character > img').src =
        'https://storage.googleapis.com/pwm-res/web/result/result_promote_share_character_after.png';
});
