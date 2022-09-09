window.onload = initPage;

function initPage() {

    ///// Typing Effect Trigger /////
    const typedHeadings = document.querySelectorAll('.monotyped');

    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: [1]
    });

    typedHeadings.forEach(e => {
        observer.observe(e);
    })

    // Set up typing effect
    //setTimeout(typedFX(document.getElementById('type')), 2000);
}

const observerCallback = (entries, observer) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i]['isIntersecting']) {
            //console.log(`${entries[i]['target'].innerText} is in view`)
            typedFX(entries[i]['target'])
            observer.unobserve(entries[i]['target'])
        } 
        // else {
        //     console.log(`${entries[i]['target'].innerText} left the view`)
        // }
    }
}

const typedFX = function(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.visibility = 'visible';

    setTimeout(() => {
        const loopThruSplitText = (splitText) => {
            let i = 0;
            const delayedOutput = () => {
                element.textContent += splitText[i];
                i++;
                if (i < splitText.length) {
                    setTimeout(delayedOutput, 222);
                }
            }
            delayedOutput();
        }
        loopThruSplitText(text.split(''));
    }, 1200)
    // remove carat after a while
    setTimeout(()=> {
        element.classList.remove('carat');
        element.classList.add('hide-carat')
    }, 10000)
}  