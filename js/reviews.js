!(function (e, t) {
  let n = 'crowdpanel-reviews',
    o = 'crowdpanel-reviews-main-area',
    i = 'crowdpanel-reviews-error-area',
    a = 'crowdpanel-reviews-head-container',
    r = 'crowdpanel-reviews-textarea-container-',
    l = 'crowdpanel-reviews-textarea-',
    c = 'crowdpanel-reviews-logging-container',
    d = 'crowdpanel-reviews-logged-in-container',
    s = 'crowdpanel-reviews-logged-out-container',
    u = 'crowdpanel-reviews-login-button',
    p = 'crowdpanel-reviews-logout-button',
    m = 'crowdpanel-reviews-submit-comment-button-',
    v = 'crowdpanel-reviews-select-order',
    g = 'crowdpanel-reviews-login-modal',
    w = 'crowdpanel-reviews-login-form',
    f = 'crowdpanel-reviews-login-submit',
    h = 'crowdpanel-reviews-emoji-like',
    _ = 'crowdpanel-reviews-emoji-love',
    b = 'crowdpanel-reviews-emoji-laugh',
    y = 'crowdpanel-reviews-emoji-wow',
    k = 'crowdpanel-reviews-emoji-sad',
    x = 'crowdpanel-reviews-emoji-angry',
    T = 'crowdpanel-reviews-emoji-like-count',
    j = 'crowdpanel-reviews-emoji-love-count',
    C = 'crowdpanel-reviews-emoji-laugh-count',
    L = 'crowdpanel-reviews-emoji-wow-count',
    M = 'crowdpanel-reviews-emoji-sad-count',
    S = 'crowdpanel-reviews-emoji-angry-count',
    N = 'crowdpanel-reviews-main-comments-area',
    E = 'crowdpanel-reviews-comment-area',
    R = 'crowdpanel-reviews-comment-total-container-',
    A = 'crowdpanel-reviews-comment-',
    B = 'crowdpanel-reviews-comment-count-container-',
    H = 'crowdpanel-reviews-comment-toggle-',
    D = 'crowdpanel-reviews-comment-child-area-',
    F = 'crowdpanel-reviews-comment-border-',
    I = 'crowdpanel-reviews-comment-menu-',
    O = 'crowdpanel-reviews-comment-menu-btn-',
    q = 'crowdpanel-reviews-comment-approve-btn-',
    P = 'crowdpanel-reviews-author-avatar',
    $ = 'crowdpanel-reviews-comment-badge-',
    G = 'crowdpanel-reviews-reply-',
    U = 'crowdpanel-reviews-upvote-',
    J = 'crowdpanel-reviews-downvote-',
    W = 'crowdpanel-reviews-like-',
    V = 'crowdpanel-reviews-vote-count-',
    X = 'crowdpanel-reviews-like-count-',
    Y = 'crowdpanel-reviews-rating-1',
    z = 'crowdpanel-reviews-rating-2',
    K = 'crowdpanel-reviews-rating-3',
    Q = 'crowdpanel-reviews-rating-4',
    Z = 'crowdpanel-reviews-rating-5',
    ee = 'crowdpanel-reviews-footer-area',
    te = null;
  const ne = 'https://server.crowdpanel.co';
  let oe = parent.location.pathname;
  const ie = [],
    ae = [];
  let re,
    le,
    ce,
    de,
    se,
    ue = 0,
    pe = !1,
    me = {},
    ve = {},
    ge = {},
    we = {},
    fe = 0,
    he = 0,
    _e = {},
    be = !1,
    ye = !1;
  function ke(e) {
    return t.createElement(e);
  }
  function xe(e, t) {
    e.classList.add('crowdpanel-reviews-' + t);
  }
  function Te(...e) {
    if (void 0 !== e && e.length > 2) {
      let t = e.slice(0, -1),
        n = e.slice(-1)[0];
      t.forEach((e) => {
        e.classList.add('crowdpanel-reviews-' + n);
      });
    }
  }
  function je(...e) {
    if (void 0 !== e && e.length > 2) {
      let t = e.slice(0, -1),
        n = e.slice(-1)[0];
      t.forEach((e) => {
        e.classList.remove('crowdpanel-reviews-' + n);
      });
    }
  }
  function Ce(e, t) {
    e.appendChild(t);
  }
  function Le(e, t) {
    e.prepend(t);
  }
  function Me(e) {
    return t.getElementById(e);
  }
  function Se(e) {
    null !== e && e.parentNode.removeChild(e);
  }
  function Ne(e, t) {
    null !== e && e.classList.remove('crowdpanel-reviews-' + t);
  }
  function Ee(e) {
    e.classList.add('crowdpanel-reviews-dark');
  }
  function Re(e) {
    if (null !== e) {
      let t = e.cloneNode(!0);
      if (null !== e.parentNode) return e.parentNode.replaceChild(t, e), t;
    }
    return e;
  }
  function Ae(e, t, n) {
    e.addEventListener(
      'click',
      function () {
        t(n);
      },
      !1
    );
  }
  function Be(e, t, n) {
    e.setAttribute(t, n);
  }
  function He(e, t, n) {
    e.removeAttribute(t, n);
  }
  function De() {
    let e = ('; ' + t.cookie).split('; crowdpanel-widget-token=');
    if (2 === e.length) return e.pop().split(';').shift();
  }
  function Fe(e) {
    let n = '',
      o = new Date();
    o.setTime(o.getTime() + 2592e6),
      (n = '; expires=' + o.toUTCString()),
      (t.cookie = 'crowdpanel-widget-token=' + e + n + '; path=/');
  }
  function Ie(e, t, n) {
    let o = new XMLHttpRequest();
    o.open('POST', e, !0),
      o.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      (o.onload = function () {
        n(JSON.parse(o.response));
      }),
      o.send(JSON.stringify(t));
  }
  function Oe(e) {
    'function' == typeof e && e();
  }
  function qe(e) {
    (ie.length = 0), (oe = '/' === oe ? 'index' : oe.replace(/\//, ''));
    let n = {
      domain: parent.location.host,
      path: oe,
      title: t.title,
      userId: me.user_id,
    };
    Ie(ne + '/api/widget/review/main', n, function (t) {
      if (t.error) return void tt(t.error.message);
      nt(),
        (de = t.data[0].domain_id),
        (se = t.data[0].page_id),
        ae.push(...t.data[0].moderators);
      let n = t.data.slice(1);
      (ue = t.data[0].comment_count || 0),
        (fe = t.data[0].ratings_count || 0),
        (he = t.data[0].total_ratings || 0),
        (_e = {
          5: t.data[0].rating_5 || 0,
          4: t.data[0].rating_4 || 0,
          3: t.data[0].rating_3 || 0,
          2: t.data[0].rating_2 || 0,
          1: t.data[0].rating_1 || 0,
        }),
        be
          ? ae.indexOf(me.email) > -1
            ? ((pe = !0), ie.push(...n))
            : n &&
              n.forEach((e) => {
                e.author_id === me.user_id
                  ? ((e.isCommentAuthor = !0), ie.push(e))
                  : 'active' === e.status && ie.push(e);
              })
          : n.forEach((e) => {
              'active' === e.status && ie.push(e);
            }),
        (le = t.data[0].reaction),
        (ve = {
          self_moderate: t.data[0].self_moderate,
          likes: t.data[0].likes,
          voting: t.data[0].voting,
          emojis: t.data[0].emojis,
          time_stamp: t.data[0].time_stamp,
          emails: t.data[0].moderator_emails,
        }),
        (we = {
          google: t.data[0].google,
          facebook: t.data[0].facebook,
          github: t.data[0].github,
          crowdpanel: t.data[0].crowdpanel,
          sso: t.data[0].sso,
        }),
        (ge = {
          like_count: t.data[0].thumbs_up_count,
          love_count: t.data[0].love_count,
          laugh_count: t.data[0].laugh_count,
          wow_count: t.data[0].wow_count,
          sad_count: t.data[0].sad_count,
          angry_count: t.data[0].angry_count,
        }),
        Oe(e);
    });
  }
  function Pe(e) {
    let t = ke('div'),
      n = ke('div'),
      o = ke('div'),
      i = ke('textarea'),
      a = ke('button');
    var c;
    return (
      (t.id = r + e),
      (n.id = d),
      (i.id = l + e),
      (a.id = m + e),
      xe(t, 'textarea-container'),
      xe(o, 'rating-comment-container'),
      xe(i, 'textarea'),
      ye && Ee(i),
      xe(a, 'submit-button'),
      0 == ie.length && 'root' == e
        ? Be(i, 'placeholder', 'Be the first to comment')
        : Be(i, 'placeholder', 'Add a comment'),
      'root' !== e && Be(t, 'style', 'padding-left: 40px'),
      (a.innerText = 'COMMENT'),
      (i.oninput =
        ((c = i),
        function () {
          (c.style.height = ''),
            (c.style.height =
              Math.min(Math.max(c.scrollHeight, 75), 400) + 'px');
        })),
      Ae(a, Xe, e),
      Ce(t, n),
      Ce(t, i),
      Ce(o, a),
      'root' === e &&
        Ce(
          o,
          (function () {
            let e = ke('div'),
              t = ke('input'),
              n = ke('input'),
              o = ke('input'),
              i = ke('input'),
              a = ke('input'),
              r = ke('label'),
              l = ke('label'),
              c = ke('label'),
              d = ke('label'),
              s = ke('label');
            xe(e, 'rating-container');
            let u = [t, n, o, i, a];
            for (let e = 0; e < u.length; e++) {
              let t = e + 1,
                n = u[e];
              (n.type = 'radio'),
                (n.name = 'crowdpanel-rating'),
                (n.id = 'crowdpanel-reviews-rating-' + t),
                (n.value = t);
            }
            return (
              (r.htmlFor = Y),
              (l.htmlFor = z),
              (c.htmlFor = K),
              (d.htmlFor = Q),
              (s.htmlFor = Z),
              Ce(e, a),
              Ce(e, s),
              Ce(e, i),
              Ce(e, d),
              Ce(e, o),
              Ce(e, c),
              Ce(e, n),
              Ce(e, l),
              Ce(e, t),
              Ce(e, r),
              e
            );
          })()
        ),
      Ce(t, o),
      t
    );
  }
  function $e(e, t) {
    let n = ke('div'),
      o = ke('span'),
      i = ke('span'),
      a = ke('div'),
      r = ke('div');
    return (
      (o.innerText = e),
      (i.innerText = `${t}%`),
      (r.style.width = `${t}%`),
      xe(o, 'ratings-count'),
      xe(i, 'ratings-votes'),
      xe(a, 'ratings-bar-container'),
      xe(r, 'ratings-bar-loader'),
      xe(n, 'ratings-count-container-individual'),
      Ce(a, r),
      Ce(n, o),
      Ce(n, a),
      Ce(n, i),
      n
    );
  }
  function Ge(e, t) {
    t
      ? (Be(e, 'style', 'border: none'), xe(e, 'toggle--loading'))
      : (Be(e, 'style', 'color: transparent'), xe(e, 'button--loading'));
  }
  function Ue(e, t) {
    t
      ? (He(e, 'style', 'border: none'), Ne(e, 'toggle--loading'))
      : (Be(e, 'style', 'color: white'), Ne(e, 'button--loading'));
  }
  function Je(e) {
    return Math.abs(e) > 999
      ? Math.sign(e) * (Math.abs(e) / 1e3).toFixed(1) + 'k'
      : Math.sign(e) * Math.abs(e);
  }
  function We(e) {
    const t = [
      '#D83B01',
      '#B50E0E',
      '#E81123',
      '#B4009E',
      '#5C2D91',
      '#0078D7',
      '#00B4FF',
      '#008272',
      '#107C10',
      '#FFB900',
    ];
    if (!e) return t[0];
    let n = 0;
    for (let t = 0; t < e.length; t++) n += e.charCodeAt(t);
    return t[n % t.length];
  }
  function Ve(e) {
    let t = Me(E);
    t.innerHTML = '';
    let n = ct(e, 'root');
    n && Ce(t, n);
  }
  function Xe(t) {
    Ge(Me(m + t)),
      be ? e.newComment(t, De()) : (Ue(Me(m + t)), e.loginBoxShow(t));
  }
  function Ye(e) {
    Me(I + e).classList.toggle('crowdpanel-reviews-dropdown-opened');
  }
  function ze(t) {
    let n = Me(B + t),
      o = Me(H + t),
      i = Me(F + t);
    Ne(o, 'comments-toggle-up'),
      xe(o, 'comments-toggle-down'),
      Be(i, 'style', 'display: block'),
      e.loadChildren(t),
      Ae((n = Re(n)), Ke, t);
  }
  function Ke(e) {
    let t = Me(B + e),
      n = Me(H + e),
      o = Me(D + e),
      i = Me(F + e);
    Ne(n, 'comments-toggle-down'),
      xe(n, 'comments-toggle-up'),
      Be(i, 'style', 'display: none'),
      Be(o, 'style', 'display: none'),
      Ae((t = Re(t)), Qe, e);
  }
  function Qe(e) {
    let t = Me(B + e),
      n = Me(H + e),
      o = Me(D + e),
      i = Me(F + e);
    Ne(n, 'comments-toggle-up'),
      xe(n, 'comments-toggle-down'),
      Be(i, 'style', 'display: block'),
      He(o, 'style', 'display: none'),
      Ae((t = Re(t)), Ke, e);
  }
  function Ze(t, n, o, i, a) {
    return (
      (t = Re(t)),
      (n = Re(n)),
      i > 0
        ? (Ae(t, e.voteComment, [o, [1, 0], a]),
          Ae(n, e.voteComment, [o, [1, -1], a]))
        : i < 0
        ? (Ae(t, e.voteComment, [o, [-1, 1], a]),
          Ae(n, e.voteComment, [o, [-1, 0], a]))
        : (Ae(t, e.voteComment, [o, [0, 1], a]),
          Ae(n, e.voteComment, [o, [0, -1], a])),
      [t, n]
    );
  }
  function et(t, n, o, i) {
    return Ae((t = Re(t)), e.likeRequest, [n, !o, i]), t;
  }
  function tt(e) {
    let t = Me(i);
    (t.innerText = e), Be(t, 'style', 'display: block;');
  }
  function nt() {
    Be(Me(i), 'style', 'display: none;');
  }
  function ot(e) {
    if (le) {
      let e = Me(h),
        t = Me(_),
        n = Me(b),
        o = Me(y),
        i = Me(k),
        a = Me(x);
      switch ((Te(e, t, n, o, i, a, 'emoji-unactive'), le)) {
        case 'like':
          Ne(e, 'emoji-unactive'), xe(e, 'emoji-active');
          break;
        case 'love':
          Ne(t, 'emoji-unactive'), xe(t, 'emoji-active');
          break;
        case 'laugh':
          Ne(n, 'emoji-unactive'), xe(n, 'emoji-active');
          break;
        case 'wow':
          Ne(o, 'emoji-unactive'), xe(o, 'emoji-active');
          break;
        case 'sad':
          Ne(i, 'emoji-unactive'), xe(i, 'emoji-active');
          break;
        case 'angry':
          Ne(a, 'emoji-unactive'), xe(a, 'emoji-active');
      }
    }
    Oe(e);
  }
  function it() {
    let t,
      n = ke('div'),
      o = ke('div'),
      i = ke('span');
    i.innerText = me.full_name;
    let a = ke('button');
    return (
      (n.id = d),
      (a.id = p),
      xe(a, 'button'),
      xe(n, 'logging-container'),
      xe(o, 'logging-container-left-div'),
      ye && (Ee(a), Ee(o)),
      (a.innerText = 'Logout'),
      Ae(a, e.logout, null),
      me.avatar_url
        ? (((t = ke('img')).src = me.avatar_url), xe(t, 'author-avatar-img'))
        : (((t = ke('div')).style.background = We(me.full_name)),
          (t.innerHTML = me.full_name
            .match(/(^\S\S?|\b\S)?/g)
            .join('')
            .match(/(^\S|\S$)?/g)
            .join('')
            .toUpperCase()),
          xe(t, 'author-avatar-alpha')),
      Ce(o, t),
      Ce(o, i),
      Ce(n, a),
      Ce(n, o),
      n
    );
  }
  function at() {
    let t = ke('div'),
      n = ke('button');
    return (
      (t.id = s),
      (n.id = u),
      xe(n, 'button'),
      ye && Ee(n),
      xe(t, 'logging-container'),
      (n.innerText = 'Login'),
      Ae(n, e.loginBoxShow, null),
      Ce(t, n),
      t
    );
  }
  function rt(e) {
    Se(Me(s)), Ce(Me(c), it()), Oe(e);
  }
  function lt(t, n, o) {
    let i = ke('div'),
      a = ke('button'),
      r = ke('div');
    if (
      ((a.id = O + t),
      (r.id = I + t),
      xe(a, 'icon-button-menu'),
      xe(i, 'dropdown'),
      ye && Ee(a),
      xe(r, 'dropdown-content'),
      Ae(a, Ye, t),
      pe && ('flagged' === n || 'pending' === n))
    ) {
      let n = ke('span');
      (n.id = q + t),
        (n.innerText = 'Approve'),
        Ae(n, e.approveComment, t),
        Ce(r, n);
    }
    if (pe || o) {
      let n = ke('span');
      (n.innerText = 'Delete'), Ae(n, e.deleteComment, t), Ce(r, n);
    }
    return Ce(i, a), Ce(i, r), i;
  }
  function ct(t, n) {
    let o = ke('div'),
      i = new Date();
    return (
      t.forEach(function (t) {
        let n,
          a = new Date(t.created_at),
          r = ke('div'),
          l = ke('div'),
          c = ke('div'),
          d = ke('div'),
          s = ke('div'),
          u = ke('div'),
          p = ke('div'),
          m = ke('div'),
          v = ke('div'),
          g = ke('span'),
          w = ke('div'),
          f = ke('div'),
          h = ke('div'),
          _ = ke('div'),
          b = ke('div'),
          y = ke('div'),
          k = ke('div'),
          x = ke('span'),
          T = ke('div'),
          j = ke('span'),
          C = ke('span'),
          L = ke('span');
        (l.id = A + t.id),
          (v.id = D + t.id),
          (r.id = R + t.id),
          (f.id = H + t.id),
          (T.id = B + t.id),
          (s.id = F + t.id),
          xe(r, 'total-container'),
          xe(l, 'comment-container'),
          xe(v, 'comment-child-container'),
          xe(c, 'comment-left'),
          xe(d, 'comment-right'),
          xe(u, 'comment-head'),
          xe(p, 'comment-body'),
          xe(m, 'comment-footer'),
          xe(s, 'comment-border'),
          xe(w, 'comment-toggle-container'),
          xe(C, 'comment-date'),
          xe(j, 'author-name'),
          ye && (Ee(p), Ee(C), Ee(j), Ee(g), Ee(L)),
          xe(g, 'reply-button'),
          xe(f, 'comments-toggle'),
          xe(f, 'comments-toggle-up'),
          xe(L, 'comment-reply-count'),
          xe(h, 'author-name-container'),
          xe(_, 'comment-head-left-container'),
          xe(b, 'comment-head-right-container'),
          xe(k, 'comment-rating-container'),
          xe(x, 'comment-rating-star'),
          xe(y, 'footer-actions-container'),
          xe(T, 'comment-count-container'),
          (p.innerHTML = t.comment_text),
          (j.innerText = t.full_name);
        let M = ae.indexOf(t.email) > -1;
        if (
          ((C.innerHTML = (function (e, t) {
            let n = e - t;
            return n < 15e3
              ? 'just now'
              : n < 12e4
              ? Math.round(n / 1e3) + ' seconds ago'
              : n < 72e5
              ? Math.round(n / 6e4) + ' minutes ago'
              : n < 1728e5
              ? Math.round(n / 36e5) + ' hours ago'
              : n < 5184e6
              ? Math.round(n / 864e5) + ' days ago'
              : n < 62208e6
              ? Math.round(n / 2592e6) + ' months ago'
              : Math.round(n / 31104e6) + ' years ago';
          })(i, a)),
          (C.title = a),
          (g.id = G + t.id),
          (g.innerHTML = 'Reply'),
          (L.innerHTML = t.children_count),
          Ae(g, e.showReply, t.id),
          Ae(T, ze, t.id),
          t.avatar_url
            ? (((n = ke('img')).src = t.avatar_url), xe(n, 'author-avatar-img'))
            : (((n = ke('div')).style.background = We(t.full_name)),
              (n.innerHTML =
                t.full_name
                  .match(/(^\S\S?|\b\S)?/g)
                  .join('')
                  .match(/(^\S|\S$)?/g)
                  .join('')
                  .toUpperCase() || '?'),
              xe(n, 'author-avatar-alpha')),
          (n.id = P),
          Ce(c, n),
          Ce(h, j),
          (M || 'active' !== t.status) &&
            Ce(
              h,
              (function (e, t, n) {
                let o = ke('span');
                return (
                  xe(o, 'comment-badge'),
                  (o.id = $ + e),
                  n
                    ? xe(o, 'comment-badge-moderator')
                    : 'flagged' === t
                    ? (xe(o, 'comment-badge-flagged'),
                      (o.innerHTML = 'FLAGGED'))
                    : 'pending' === t &&
                      (xe(o, 'comment-badge-pending'),
                      (o.innerHTML = 'PENDING')),
                  o
                );
              })(t.id, t.status, M)
            ),
          Ce(_, h),
          ve.time_stamp && Ce(_, C),
          t.rating)
        )
          for (let e = 0; e < t.rating; e++) k.appendChild(x.cloneNode(!0));
        if (
          (Ce(u, _),
          Ce(b, k),
          be &&
            (pe
              ? Ce(b, lt(t.id, t.status, t.isCommentAuthor))
              : t.isCommentAuthor &&
                Ce(b, lt(t.id, t.status, t.isCommentAuthor))),
          Ce(u, b),
          ve.voting)
        ) {
          let n = ke('button'),
            o = ke('button'),
            i = ke('div'),
            a = ke('span');
          if (((n.id = U + t.id), (o.id = J + t.id), (a.id = V + t.id), be)) {
            t.vote_value > 0
              ? xe(n, 'vote-active')
              : t.vote_value < 0 && xe(o, 'vote-active');
            let e = Ze(n, o, t.id, t.vote_value, t.vote_id);
            (n = e[0]), (o = e[1]);
          } else Ae(n, e.loginBoxShow, null), Ae(o, e.loginBoxShow, null);
          xe(n, 'icon-button-upvote'),
            xe(o, 'icon-button-downvote'),
            xe(a, 'numeral-span'),
            ye && Ee(a),
            xe(i, 'footer-voting-container'),
            (a.innerText = Je(t.vote_count)),
            Ce(i, n),
            Ce(i, a),
            Ce(i, o),
            Ce(y, i);
        } else if (ve.likes) {
          let n = ke('button'),
            o = ke('div'),
            i = ke('span');
          (n.id = W + t.id),
            (i.id = X + t.id),
            be
              ? (t.liked && xe(n, 'like-active'),
                (n = et(n, t.id, t.liked, t.like_id)))
              : Ae(n, e.loginBoxShow, null),
            xe(n, 'icon-button-like'),
            xe(i, 'numeral-span'),
            ye && (Ee(n), Ee(i)),
            xe(o, 'footer-likes-container'),
            (i.innerText = Je(t.like_count)),
            Ce(o, n),
            Ce(o, i),
            Ce(y, o);
        }
        Ce(m, g),
          Ce(m, y),
          Ce(d, u),
          Ce(d, p),
          Ce(d, m),
          Ce(l, c),
          Ce(l, d),
          Ce(T, L),
          Ce(w, f),
          Ce(T, w),
          t.children_count > 0 && Ce(r, T),
          Ce(r, s),
          Ce(r, l),
          Ce(r, v),
          Ce(o, r);
      }),
      o
    );
  }
  function dt() {
    void 0 === re ? ut() : st(re, ut);
  }
  function st(e, n) {
    let o = t.getElementsByTagName('HEAD')[0],
      i = ke('link');
    (i.rel = 'stylesheet'),
      (i.type = 'text/css'),
      (i.href = e),
      (function (e, t, n) {
        e.addEventListener('load', function () {
          t(n);
        });
      })(i, n),
      Ce(o, i);
  }
  function ut() {
    Be(Me(o), 'style', '');
  }
  (e.socialAuth = function (t) {
    let n = { provider: t.provider, domainId: de },
      o = window.open('', '_blank');
    Ie(ne + '/api/widget/oauth', n, function (e) {
      (o.location = e.data), (ce = e.token);
    });
    var i = setInterval(function () {
      o.closed &&
        (clearInterval(i),
        Ie(ne + '/api/widget/authlogin', { sessionToken: ce }, function (t) {
          if (t.error) return tt(t.error.message), void (be = !1);
          e.loginBoxClose(),
            nt(),
            (be = !0),
            Fe(t[0].user_id),
            (me = t[0]),
            rt(function () {
              qe(function () {
                ot(function () {
                  Ve(ie);
                });
              });
            });
        }));
    }, 250);
  }),
    (e.newComment = function (n, o) {
      let i,
        a = Me(l + n),
        r = a.value;
      if ('' === r) return xe(a, 'red-border'), void Ue(Me(m + n));
      Ne(a, 'red-border');
      let c = 'pending';
      ve.self_moderate ? pe && (c = 'active') : (c = 'active');
      const d = 'root' === n ? null : n;
      'root' === n &&
        (i = (function () {
          let e,
            n = t.querySelectorAll('input[name="crowdpanel-rating"]');
          for (const t of n) t.checked && (e = t.value);
          return e || 0;
        })());
      let s = {
        author_id: o,
        status: c,
        page_id: se,
        parent_id: d,
        comment_text: r,
        rating: i || null,
        created_at: new Date(),
      };
      Ue(Me(m + n)),
        Ie(ne + '/api/widget/review/new', s, function (t) {
          if (t.error || !t)
            return (
              '23505' === t.error.code &&
                window.alert(
                  "You can't review twice! Delete your old review before making another one."
                ),
              void Ue(Me(m + n))
            );
          (a.value = ''), Ue(Me(m + n)), 'root' !== n && e.collapseReply(n);
          let o = ct(
            [
              {
                id: t.data[0].id,
                full_name: me.full_name,
                avatar_url: me.avatar_url,
                author_id: t.data[0].author_id,
                page_id: t.data[0].page_id,
                comment_text: t.data[0].comment_text,
                status: c,
                parent_id: t.data[0].parent_id,
                rating: i || null,
                vote_count: 0,
                like_count: 0,
                created_at: s.created_at,
                isCommentAuthor: !0,
              },
            ],
            n
          );
          if ('root' !== n) {
            Le(Me(D + n), o);
          } else {
            Le(Me(E), o);
          }
        });
    }),
    (e.deleteComment = function (e) {
      if (
        (pe && Ye(e), !confirm('Are you sure you want to delete this comment?'))
      )
        return;
      let t = { id: e, user_id: me.user_id };
      Ie(ne + '/api/widget/review/remove', t, function (t) {
        if (t.error || !t) return;
        let n = Me(R + e);
        'deleted' === t.data[0].status && Be(n, 'style', 'display: none');
      });
    }),
    (e.approveComment = function (e) {
      if ((Ye(e), !pe)) return;
      let t = { id: e, user_id: me.user_id };
      Ie(ne + '/api/widget/review/approve', t, function (t) {
        if (!t.error && t && 'active' === t.data[0].status) {
          let t = Me($ + e),
            n = Me(q + e);
          Be(t, 'style', 'display: none'), Be(n, 'style', 'display: none');
        }
      });
    }),
    (e.loadChildren = function (e) {
      if ('root' === e) return;
      let t;
      Ge(Me(H + e), !0),
        (t = ve.voting ? 'votes' : ve.likes ? 'likes' : null),
        (json = { parentId: e, userId: me.user_id, votesOrLikes: t }),
        Ie(ne + '/api/widget/review/children', json, function (t) {
          if (t.error || !t) return void Ue(Me(H + e), !0);
          let n = [],
            o = !1;
          be
            ? pe
              ? n.push(...t.data)
              : t.data.forEach((e) => {
                  e.author_id === me.user_id
                    ? ((e.isCommentAuthor = !0), n.push(e))
                    : 'active' === e.status
                    ? n.push(e)
                    : (o = !0);
                })
            : t.data.forEach((e) => {
                'active' === e.status ? n.push(e) : (o = !0);
              });
          let i = ct(n, e),
            a = Me(D + e);
          if ((i && Le(a, i), o)) {
            let e = ke('span');
            xe(e, 'no-replies-span'),
              ye && Ee(e),
              (e.innerHTML = '<em>Some comments have been filtered<em>'),
              Le(a, e);
          }
          Ue(Me(H + e), !0);
        });
    }),
    (e.likeRequest = function (e) {
      let t = e[0],
        n = e[1],
        o = e[2],
        i = Me(W + t),
        a = Me(X + t);
      n
        ? (xe(i, 'like-active'), (a.innerText = Je(parseInt(a.innerText) + 1)))
        : (Ne(i, 'like-active'), (a.innerText = Je(parseInt(a.innerText) - 1)));
      var r = {
        user_id: me.user_id,
        comment_id: t,
        page_id: se,
        liked: n,
        likeId: o,
      };
      Ie(ne + '/api/widget/review/like', r, function (e) {
        if (e.error) return;
        nt();
        let o = e.data[0].id;
        i = et(i, t, n, o);
      });
    }),
    (e.voteComment = function (e) {
      let t = e[0],
        n = e[1][0],
        o = e[1][1],
        i = e[2],
        a = Me(U + t),
        r = Me(J + t),
        l = Me(V + t);
      var c = {
        user_id: me.user_id,
        comment_id: t,
        page_id: se,
        vote_val: o,
        voteId: i,
      };
      Ne(a, 'vote-active'),
        Ne(r, 'vote-active'),
        o > 0 ? xe(a, 'vote-active') : o < 0 && xe(r, 'vote-active'),
        (l.innerText = Je(parseInt(l.innerText) + o - n)),
        Ie(ne + '/api/widget/review/vote', c, function (e) {
          if (e.error) return;
          nt(), (i = e.data[0].id);
          let n = Ze(a, r, t, o, i);
          (a = n[0]), (r = n[1]);
        });
    }),
    (e.pageReact = function (t) {
      if (!be) return void e.loginBoxShow((id = null));
      let n,
        o = Me(h),
        i = Me(_),
        a = Me(b),
        r = Me(y),
        l = Me(k),
        c = Me(x),
        d = Me(T),
        s = Me(j),
        u = Me(C),
        p = Me(L),
        m = Me(M),
        v = Me(S);
      if (
        (je(o, i, a, r, l, c, 'emoji-active'),
        'remove' == (n = le ? (le === t ? 'remove' : 'change') : 'new') ||
          'change' == n)
      ) {
        switch (le) {
          case 'like':
            (ge.like_count = ge.like_count - 1),
              (d.innerText = Je(ge.like_count));
            break;
          case 'love':
            (ge.love_count = ge.love_count - 1),
              (s.innerText = Je(ge.love_count));
            break;
          case 'laugh':
            (ge.laugh_count = ge.laugh_count - 1),
              (u.innerText = Je(ge.laugh_count));
            break;
          case 'wow':
            (ge.wow_count = ge.wow_count - 1), (p.innerText = Je(ge.wow_count));
            break;
          case 'sad':
            (ge.sad_count = ge.sad_count - 1), (m.innerText = Je(ge.sad_count));
            break;
          case 'angry':
            (ge.angry_count = ge.angry_count - 1),
              (v.innerText = Je(ge.angry_count));
        }
        le = '';
      }
      if ('change' == n || 'new' == n)
        switch ((Te(o, i, a, r, l, c, 'emoji-unactive'), (le = t), t)) {
          case 'like':
            Ne(o, 'emoji-unactive'),
              xe(o, 'emoji-active'),
              (ge.like_count = ge.like_count + 1),
              (d.innerText = Je(ge.like_count));
            break;
          case 'love':
            Ne(i, 'emoji-unactive'),
              xe(i, 'emoji-active'),
              (ge.love_count = ge.love_count + 1),
              (s.innerText = Je(ge.love_count));
            break;
          case 'laugh':
            Ne(a, 'emoji-unactive'),
              xe(a, 'emoji-active'),
              (ge.laugh_count = ge.laugh_count + 1),
              (u.innerText = Je(ge.laugh_count));
            break;
          case 'wow':
            Ne(r, 'emoji-unactive'),
              xe(r, 'emoji-active'),
              (ge.wow_count = ge.wow_count + 1),
              (p.innerText = Je(ge.wow_count));
            break;
          case 'sad':
            Ne(l, 'emoji-unactive'),
              xe(l, 'emoji-active'),
              (ge.sad_count = ge.sad_count + 1),
              (m.innerText = Je(ge.sad_count));
            break;
          case 'angry':
            Ne(c, 'emoji-unactive'),
              xe(c, 'emoji-active'),
              (ge.angry_count = ge.angry_count + 1),
              (v.innerText = Je(ge.angry_count));
        }
      else je(o, i, a, r, l, c, 'emoji-unactive');
      if (
        (ge.like_count > 0 && Be(d, 'style', 'display: block'),
        ge.love_count > 0 && Be(s, 'style', 'display: block'),
        ge.laugh_count > 0 && Be(u, 'style', 'display: block'),
        ge.wow_count > 0 && Be(p, 'style', 'display: block'),
        ge.sad_count > 0 && Be(m, 'style', 'display: block'),
        ge.angry_count > 0 && Be(v, 'style', 'display: block'),
        !me.user_id)
      )
        return;
      let g = { reaction: t, page_id: se, user_id: me.user_id, action: n };
      Ie(ne + '/api/widget/emojiReactions', g, function (e) {
        e.error;
      });
    }),
    (e.popupRender = function (t) {
      let n = Me(g),
        o = ke('div'),
        i = ke('div'),
        a = ke('span'),
        r = ke('div'),
        l = ke('div'),
        c = ke('div'),
        d = ke('div');
      if (
        ((a.innerHTML = '&times;'),
        xe(o, 'modal-area'),
        xe(a, 'modal-close'),
        xe(i, 'login-modal-content'),
        xe(r, 'modal-header'),
        xe(l, 'modal-body'),
        xe(d, 'social-login-container'),
        xe(c, 'modal-footer'),
        Ae(a, e.loginBoxClose),
        Ce(r, a),
        we.google)
      ) {
        let t = ke('button'),
          n = ke('span'),
          o = ke('span');
        xe(n, 'google-logo'),
          (o.innerText = 'Google'),
          xe(t, 'login-button-google'),
          Ae(t, e.socialAuth, { provider: 'google' }),
          Ce(t, n),
          Ce(t, o),
          Ce(d, t);
      }
      if (we.facebook) {
        let t = ke('button'),
          n = ke('span'),
          o = ke('span');
        xe(n, 'facebook-logo'),
          (o.innerText = 'Facebook'),
          xe(t, 'login-button-facebook'),
          Ae(t, e.socialAuth, { provider: 'facebook' }),
          Ce(t, n),
          Ce(t, o),
          Ce(d, t);
      }
      if (we.github) {
        let t = ke('button'),
          n = ke('span'),
          o = ke('span');
        xe(n, 'github-logo'),
          (o.innerText = 'Github'),
          xe(t, 'login-button-github'),
          Ae(t, e.socialAuth, { provider: 'github' }),
          Ce(t, n),
          Ce(t, o),
          Ce(d, t);
      }
      if ((Ce(l, d), we.sso)) {
        let t = ke('button');
        (t.id = 'crowdpanel-reviews-login-sso'),
          (t.innerText = 'Proceed With ' + parent.location.host),
          xe(t, 'login-button-sso'),
          Ae(t, e.socialAuth, { provider: 'sso' }),
          Ce(l, t);
      }
      if (we.crowdpanel) {
        let n = ke('form'),
          o = ke('span'),
          i = ke('a'),
          a = ke('a'),
          r = ke('input'),
          d = ke('input'),
          s = ke('button');
        (n.id = w),
          (r.id = 'crowdpanel-reviews-login-box-email'),
          (d.id = 'crowdpanel-reviews-login-box-password'),
          (s.id = f),
          (s.innerHTML = 'Login'),
          (o.innerHTML = "Don't have an account?"),
          (a.innerHTML = 'Forgot Password'),
          (i.innerHTML = 'Sign up'),
          xe(s, 'login-button-crowdpanel'),
          Be(r, 'type', 'email'),
          Be(r, 'placeholder', 'Email'),
          (r.required = !0),
          Be(d, 'type', 'password'),
          Be(d, 'placeholder', 'Password'),
          (d.required = !0),
          Be(s, 'type', 'submit'),
          Be(a, 'href', 'https://dashboard.crowdpanel.co/forgot-password'),
          Be(i, 'href', 'https://dashboard.crowdpanel.co/signup'),
          Be(i, 'target', '_blank'),
          Ce(n, r),
          Ce(n, d),
          Ce(n, s),
          Ce(l, n),
          Ce(l, a),
          Ce(c, o),
          Ce(c, i),
          n.addEventListener('submit', function (n) {
            Ge(s), n.preventDefault(), e.login(n, t);
          });
      }
      Ce(i, r), Ce(i, l), Ce(i, c), Ce(o, i), Ce(n, o);
    }),
    (e.showReply = function (t) {
      let n = Me(A + t);
      var o, i;
      (o = n), (i = Pe(t)), o.parentNode.insertBefore(i, o.nextSibling);
      let a = Me(G + t);
      (a.innerText = 'Cancel'), Ae((a = Re(a)), e.collapseReply, t);
    }),
    (e.collapseReply = function (t) {
      let n = Me(G + t);
      Me(r + t).remove(),
        (n.innerText = 'Reply'),
        Ae((n = Re(n)), e.showReply, t);
    }),
    (e.login = function (t, n) {
      !(function (t, n, o) {
        let i = { email: t, password: n, pageId: se };
        Me(w).reset(),
          Ie(ne + '/api/widget/login', i, function (t) {
            if (t.error || 0 === t.length)
              return Ue(Me(f)), void tt(t.error.message);
            Ue(Me(f)),
              e.loginBoxClose(),
              nt(),
              (be = !0),
              Fe(t[0].user_id),
              (me = t[0]),
              rt(function () {
                qe(function () {
                  ot(function () {
                    Ve(ie);
                  });
                });
              });
          });
      })(t.target[0].value, t.target[1].value);
    }),
    (e.logout = function () {
      var o;
      (t.cookie =
        'crowdpanel-widget-token=;expires=' +
        new Date(0).toUTCString() +
        '; path=/'),
        (t.cookie =
          'crowdpanel-widget-token=;expires=' +
          new Date(0).toUTCString() +
          '; path=/'),
        (be = !1),
        (me = {}),
        (userVoted = {}),
        Se(Me(d)),
        Ce(Me(c), at()),
        (Me(n).innerHTML = ''),
        (ie.length = 0),
        (ae.length = 0),
        (ve = {}),
        (pe = !1),
        (be = !1),
        (ge = {}),
        (we = {}),
        (me = {}),
        (le = null),
        (ue = 0),
        (fe = 0),
        (he = 0),
        (_e = {}),
        e.main(o);
    }),
    (e.loginBoxClose = function () {
      let e = Me(o),
        t = Me(g);
      Ne(e, 'blurred'), Be(t, 'style', 'display: none');
    }),
    (e.loginBoxShow = function (t) {
      let n = Me(o),
        i = Me(g);
      e.popupRender(t),
        xe(n, 'blurred'),
        Be(i, 'style', ''),
        (window.location.hash = g);
    }),
    (e.main = function (t) {
      null !== (te = Me(n))
        ? ((function () {
            let e = ke('div');
            (e.id = g), Ce(te, e);
          })(),
          (function () {
            let e = ke('div');
            (e.id = i),
              xe(e, 'error-container'),
              Be(e, 'style', 'display: none;'),
              Ce(te, e);
          })(),
          (function () {
            let e = ke('div');
            (e.id = o), xe(e, 'main-area'), ye && Ee(e);
            Be(e, 'style', 'display: none'), Ce(te, e);
          })(),
          st(
            'https://cdn.jsdelivr.net/gh/crowdpanel/widgets/css/reviews.min.css',
            dt
          ),
          (function (e) {
            let t = De();
            if (!t) return (be = !1), void Oe(e);
            Ie(ne + '/api/widget/self', { userToken: t }, function (t) {
              !t.error && t ? ((be = !0), (me = t.data), Oe(e)) : Oe(e);
            });
          })(function () {
            qe(function () {
              !(function (t) {
                let n = Me(o);
                Ce(
                  n,
                  (function () {
                    let t = ke('div'),
                      n = ke('div');
                    (t.id = a),
                      (n.id = c),
                      ve.emojis &&
                        Ce(
                          t,
                          (function () {
                            let t = ke('div'),
                              n = ke('div'),
                              o = ke('div'),
                              i = ke('div'),
                              a = ke('div'),
                              r = ke('div'),
                              l = ke('div'),
                              c = ke('div'),
                              d = ke('button'),
                              s = ke('button'),
                              u = ke('button'),
                              p = ke('button'),
                              m = ke('button'),
                              v = ke('button'),
                              g = ke('span'),
                              w = ke('span'),
                              f = ke('span'),
                              N = ke('span'),
                              E = ke('span'),
                              R = ke('span'),
                              A = ke('span'),
                              B = ke('span'),
                              H = ke('span'),
                              D = ke('span'),
                              F = ke('span'),
                              I = ke('span');
                            (A.innerText = 'Like'),
                              (B.innerText = 'Love'),
                              (H.innerText = 'Funny'),
                              (D.innerText = 'Wow'),
                              (F.innerText = 'Sad'),
                              (I.innerText = 'Angry'),
                              (d.id = h),
                              (u.id = _),
                              (p.id = b),
                              (s.id = y),
                              (m.id = k),
                              (v.id = x),
                              (g.id = T),
                              (f.id = j),
                              (N.id = C),
                              (w.id = L),
                              (E.id = M),
                              (R.id = S),
                              Ae(d, e.pageReact, 'like'),
                              Ae(u, e.pageReact, 'love'),
                              Ae(p, e.pageReact, 'laugh'),
                              Ae(s, e.pageReact, 'wow'),
                              Ae(m, e.pageReact, 'sad'),
                              Ae(v, e.pageReact, 'angry'),
                              Te(A, B, H, D, F, I, 'tooltip-text'),
                              xe(n, 'emojis-container'),
                              Te(o, a, r, i, l, c, 'emoji-container'),
                              xe(d, 'emoji-like'),
                              xe(u, 'emoji-love'),
                              xe(p, 'emoji-laugh'),
                              xe(s, 'emoji-wow'),
                              xe(m, 'emoji-sad'),
                              xe(v, 'emoji-angry'),
                              Te(g, f, N, w, E, R, 'emoji-count'),
                              (g.innerText = Je(ge.like_count)),
                              (f.innerText = Je(ge.love_count)),
                              (N.innerText = Je(ge.laugh_count)),
                              (w.innerText = Je(ge.wow_count)),
                              (E.innerText = Je(ge.sad_count)),
                              (R.innerText = Je(ge.angry_count)),
                              ge.like_count < 1 &&
                                Be(g, 'style', 'display: none');
                            ge.love_count < 1 &&
                              Be(f, 'style', 'display: none');
                            ge.laugh_count < 1 &&
                              Be(N, 'style', 'display: none');
                            ge.wow_count < 1 && Be(w, 'style', 'display: none');
                            ge.sad_count < 1 && Be(E, 'style', 'display: none');
                            ge.angry_count < 1 &&
                              Be(R, 'style', 'display: none');
                            return (
                              Ce(o, d),
                              Ce(o, g),
                              Ce(d, A),
                              Ce(a, u),
                              Ce(a, f),
                              Ce(u, B),
                              Ce(r, p),
                              Ce(r, N),
                              Ce(p, H),
                              Ce(i, s),
                              Ce(i, w),
                              Ce(s, D),
                              Ce(l, m),
                              Ce(l, E),
                              Ce(m, F),
                              Ce(c, v),
                              Ce(c, R),
                              Ce(v, I),
                              (function (...e) {
                                if (void 0 !== e && e.length > 2) {
                                  let t = e.slice(0, -1),
                                    n = e.slice(-1)[0];
                                  t.forEach((e) => {
                                    n.appendChild(e);
                                  });
                                }
                              })(o, a, r, i, l, c, n),
                              Ce(t, n),
                              t
                            );
                          })()
                        );
                    Ce(t, n),
                      be && 0 !== Object.keys(me).length
                        ? Ce(t, it())
                        : Ce(t, at());
                    Ce(t, Pe('root')),
                      Ce(
                        t,
                        (function () {
                          let e = ke('div'),
                            t = ke('div'),
                            n = ke('div'),
                            o = ke('span'),
                            i = ke('span'),
                            a = ke('span');
                          (o.innerText = he),
                            (i.innerText = 'Stars'),
                            (a.innerText = `(${Je(fe)} votes)`),
                            xe(o, 'ratings-count'),
                            xe(i, 'ratings-text'),
                            xe(a, 'ratings-votes'),
                            xe(n, 'ratings-star'),
                            xe(e, 'ratings-container'),
                            xe(t, 'ratings-count-container-total'),
                            Ce(t, n),
                            Ce(t, o),
                            Ce(t, i),
                            Ce(t, a),
                            Ce(e, t);
                          for (const t in _e) Ce(e, $e(t, _e[t]));
                          return e;
                        })()
                      ),
                      ie.length > 0 &&
                        Ce(
                          t,
                          (function () {
                            let e = ke('div'),
                              t = ke('div'),
                              n = ke('div'),
                              o = ke('hr'),
                              i = ke('span'),
                              a = ke('span'),
                              r = ke('select');
                            xe(e, 'page-selection-container'),
                              xe(n, 'page-comments-container'),
                              xe(a, 'page-count-span'),
                              xe(i, 'page-numeral-span'),
                              xe(t, 'page-actions-container'),
                              Be(a, 'style', 'margin-left: 4px'),
                              (i.innerText = ue),
                              1 == ie.length
                                ? (a.innerText = 'comment')
                                : (a.innerText = 'comments');
                            (r.id = v), ye && (Ee(r), Ee(a), Ee(i));
                            let l = ke('option'),
                              c = ke('option'),
                              d = ke('option'),
                              s = ke('option'),
                              u = ke('option');
                            return (
                              (l.id = 'newest'),
                              (c.id = 'oldest'),
                              (d.id = 'top-rated'),
                              (s.id = 'least-rated'),
                              (u.id = 'top'),
                              (l.textContent = 'Newest'),
                              (c.textContent = 'Oldest'),
                              (d.textContent = 'Top Rated'),
                              (s.textContent = 'Least Rated'),
                              (u.textContent = 'Top'),
                              r.addEventListener('change', function (e) {
                                !(function (e) {
                                  let t = [];
                                  'Top' === e
                                    ? (t = ve.voting
                                        ? ie.sort(
                                            (e, t) =>
                                              Number(t.vote_count) -
                                              Number(e.vote_count)
                                          )
                                        : ve.likes
                                        ? ie.sort(
                                            (e, t) =>
                                              Number(t.like_count) -
                                              Number(e.like_count)
                                          )
                                        : [...ie])
                                    : 'Top Rated' === e
                                    ? (t = ie.sort(
                                        (e, t) =>
                                          Number(t.rating) - Number(e.rating)
                                      ))
                                    : 'Least Rated' === e
                                    ? (t = ie.sort(
                                        (e, t) =>
                                          Number(e.rating) - Number(t.rating)
                                      ))
                                    : 'Oldest' === e
                                    ? (t = ie.sort(
                                        (e, t) => Number(e.id) - Number(t.id)
                                      ))
                                    : 'Newest' === e &&
                                      (t = ie.sort(
                                        (e, t) => Number(t.id) - Number(e.id)
                                      )),
                                    Ve(t);
                                })(e.target.value);
                              }),
                              Ce(n, i),
                              Ce(n, a),
                              Ce(r, l),
                              Ce(r, c),
                              Ce(r, d),
                              Ce(r, s),
                              Ce(r, u),
                              Ce(t, n),
                              Ce(t, r),
                              Ce(e, t),
                              Ce(e, o),
                              e
                            );
                          })()
                        );
                    return t;
                  })()
                ),
                  Ce(
                    n,
                    (function () {
                      let e = ke('div'),
                        t = ke('div');
                      (e.id = N), (t.id = E), xe(t, 'comment-area');
                      let n = ct(ie, 'root');
                      n && Ce(t, n);
                      return Ce(e, t), e;
                    })()
                  ),
                  Ce(
                    n,
                    (function () {
                      let e = ke('div');
                      e.id = ee;
                      let t = ke('hr'),
                        n = ke('div'),
                        o = ke('a'),
                        i = ke('a');
                      ye && Ee(i);
                      return (
                        xe(n, 'footer-container'),
                        xe(o, 'icon-button-markdown'),
                        (i.innerHTML = 'Powered by Crowdpanel'),
                        Be(i, 'href', 'https://crowdpanel.co'),
                        Be(i, 'target', '_blank'),
                        Be(o, 'href', 'https://docs.crowdpanel.co/#/markdown'),
                        Be(o, 'target', '_blank'),
                        Ce(e, t),
                        Ce(n, o),
                        Ce(n, i),
                        Ce(e, n),
                        e
                      );
                    })()
                  ),
                  Oe(t);
              })(function () {
                ot(function () {
                  ut();
                });
              });
            });
          }))
        : console.log(
            "Please embed the 'crowdpanel-reviews' div onto your webpage"
          );
    });
  let pt = !1;
  function mt() {
    pt ||
      ((pt = !0),
      (function () {
        for (var e = t.getElementsByTagName('script'), n = 0; n < e.length; n++)
          e[n].src.match(/\/crowdpanel-reviews\.js$/) &&
            ('dark' === e[n].dataset.theme && (ye = !0),
            e[n].dataset.customCss && (re = e[n].dataset.customCss));
      })(),
      e.main(void 0));
  }
  let vt = function () {
    let e = t.readyState;
    'loading' === e
      ? t.addEventListener('readystatechange', vt)
      : 'interactive' === e
      ? mt()
      : 'complete' === e && mt();
  };
  vt();
})(window, document);
