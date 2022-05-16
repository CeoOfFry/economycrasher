function c_(a) {
    console.log(a)
}

function f_(a, b) {
    return a.getElementsByClassName(b);
}

function t_(a, b) {
    setTimeout(a, b);
}

let i = 0;
let p = false;

function d_(_c) {
    let l = f_(_c, "like-item")[0];
    if (l.children[0].children[0].getAttribute("stroke") == '#8C8C8C') {
        l.click();
        c_("liked post");
    }

    let b = f_(_c, "reply-comment-operation");
    t_(() => {
        for (let i = 0; i < b.length; i++) {
            let _b = b[i];
            let _l = _b.children[0];

            if (_l.children[0].children[0].getAttribute("stroke") == '#8C8C8C') {
                _l.click();
                c_("liked reply");
            }
        }
    }, 1000);

    let _e = f_(_c, "btn more-comment-btn");
    t_(() => {
        if (_e.length != 0) {
            _e[0].click();
            c_("expanded");

            d_(_c);
        }
        else {
            c_("done");
            p = false;
            i++;
        }
    }, 2000);
}

let c = f_(document, "feed-card-container");

function a_(_i) {
    let _c = c[_i];

    if (f_(_c, "comments-item")[0].children.length === 2) {
        p = true;

        if (f_(_c, "feed-card-expand").length === 0) {
            f_(_c, "comments-item")[0].click();
            c_("\n" + i + ": opened");
        }

        d_(_c);
    }
    else {
        i++;
    }
}

function l() {
    if (i < c.length) {
        t_(() => {
            l();
        }, 50);

        if (!p) {
            a_(i);
        }
    }
    else if (i = c.length) {
        scrollTo(0, document.body.scrollHeight)

        t_(() => {
            l();
        }, 1500);
    }
    else {
        c_("\n" + "finished action on all loaded cards")
    }
}
