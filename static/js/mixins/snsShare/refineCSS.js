const refineShareButtonBoxCSS = (buttonSize) => {
    const shareButtonsBox = document.querySelectorAll('.at-share-btn-elements');
    if (shareButtonsBox.length) {
        shareButtonsBox.forEach((e) => {
            e.style.display = 'flex';
            e.style.justifyContent = 'space-between';
            refineShareButtonCSS(e, buttonSize);
        });
        return true;
    }
    return false;
};

const refineShareButtonCSS = (shareButtonBox, buttonSize) => {
    const shareButtons = [...shareButtonBox.children];
    shareButtons.forEach((e) => {
        e.style.display = 'flex';
        e.style.flexDirection = 'column';
        e.style.alignItems = 'center';
        refineShareButtonIconCSS(e);
    });
};

const refineShareButtonIconCSS = (shareButton, buttonSize) => {
    const shareButtonIconWrapper =
        shareButton.querySelector('.at-icon-wrapper');
    shareButtonIconWrapper.style.width = `64rem`;
    shareButtonIconWrapper.style.height = `64rem`;
    shareButtonIconWrapper.style.lineHeight = `64rem`;

    const shareButtonIcon = shareButton.querySelector('.at-icon');
    shareButtonIcon.style.width = `64rem`;
    shareButtonIcon.style.height = `64rem`;
};

// CSS 를 재정의합니다.
export const refineShareCSS = (buttonSize = 64) => {
    // 수정에 성공했다면 종료.
    if (refineShareButtonBoxCSS(buttonSize)) {
        return;
    }
    setTimeout(refineShareCSS, 100);
};
