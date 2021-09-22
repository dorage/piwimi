const refineShareButtonBoxCSS = () => {
    const shareButtonsBox = document.querySelectorAll('.at-share-btn-elements');
    if (shareButtonsBox.length === 2) {
        shareButtonsBox.forEach((e) => {
            e.style.display = 'flex';
            e.style.justifyContent = 'space-between';
            refineShareButtonCSS(e);
        });
        return true;
    }
    return false;
};

const refineShareButtonCSS = (shareButtonBox) => {
    const shareButtons = [...shareButtonBox.children];
    shareButtons.forEach((e) => {
        e.style.display = 'flex';
        e.style.flexDirection = 'column';
        e.style.alignItems = 'center';
        refineShareButtonLabelCSS(e);
        refineShareButtonIconCSS(e);
    });
};

const refineShareButtonIconCSS = (shareButton) => {
    const shareButtonIconWrapper =
        shareButton.querySelector('.at-icon-wrapper');
    shareButtonIconWrapper.style.width = '64rem';
    shareButtonIconWrapper.style.height = '64rem';
    shareButtonIconWrapper.style.lineHeight = '64rem';

    const shareButtonIcon = shareButton.querySelector('.at-icon');
    shareButtonIcon.style.width = '64rem';
    shareButtonIcon.style.height = '64rem';
};

const refineShareButtonLabelCSS = (shareButton) => {
    const shareButtonLabel = shareButton.querySelector('.at-label');
    shareButtonLabel.style.margin = 'initial';
    shareButtonLabel.style.padding = 'initial';
    shareButtonLabel.style.fontSize = '16rem';
    shareButtonLabel.classList.add('ta-c');
};

// CSS 를 재정의합니다.
const refineShareCSS = () => {
    // 수정에 성공했다면 종료.
    if (refineShareButtonBoxCSS()) {
        console.log('done');
        return;
    }
    setTimeout(refineShareCSS, 100);
};

refineShareCSS();
