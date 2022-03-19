!(function (e, t) {
  let n = 'crowdpanel-comments',
    o = 'crowdpanel-comments-main-area',
    i = 'crowdpanel-comments-error-area',
    a = 'crowdpanel-comments-head-container',
    r = 'crowdpanel-comments-textarea-container-',
    l = 'crowdpanel-comments-textarea-',
    c = 'crowdpanel-comments-logging-container',
    d = 'crowdpanel-comments-logged-in-container',
    u = 'crowdpanel-comments-logged-out-container',
    s = 'crowdpanel-comments-login-button',
    m = 'crowdpanel-comments-logout-button',
    p = 'crowdpanel-comments-submit-comment-button-',
    g = 'crowdpanel-comments-select-order',
    v = 'crowdpanel-comments-anon-name-',
    f = 'crowdpanel-comments-login-modal',
    h = 'crowdpanel-comments-login-form',
    w = 'crowdpanel-comments-login-submit',
    _ = 'crowdpanel-comments-emoji-like',
    b = 'crowdpanel-comments-emoji-love',
    y = 'crowdpanel-comments-emoji-laugh',
    k = 'crowdpanel-comments-emoji-wow',
    x = 'crowdpanel-comments-emoji-sad',
    T = 'crowdpanel-comments-emoji-angry',
    j = 'crowdpanel-comments-emoji-like-count',
    C = 'crowdpanel-comments-emoji-love-count',
    L = 'crowdpanel-comments-emoji-laugh-count',
    M = 'crowdpanel-comments-emoji-wow-count',
    S = 'crowdpanel-comments-emoji-sad-count',
    E = 'crowdpanel-comments-emoji-angry-count',
    A = 'crowdpanel-comments-main-comments-area',
    N = 'crowdpanel-comments-comment-area',
    R = 'crowdpanel-comments-comment-total-container-',
    B = 'crowdpanel-comments-comment-',
    H = 'crowdpanel-comments-comment-count-container-',
    D = 'crowdpanel-comments-comment-toggle-',
    I = 'crowdpanel-comments-comment-child-area-',
    O = 'crowdpanel-comments-comment-border-',
    F = 'crowdpanel-comments-comment-menu-',
    q = 'crowdpanel-comments-comment-menu-btn-',
    P = 'crowdpanel-comments-comment-approve-btn-',
    G = 'crowdpanel-comments-author-avatar',
    U = 'crowdpanel-comments-comment-badge-',
    $ = 'crowdpanel-comments-reply-',
    J = 'crowdpanel-comments-upvote-',
    W = 'crowdpanel-comments-downvote-',
    V = 'crowdpanel-comments-like-',
    X = 'crowdpanel-comments-vote-count-',
    z = 'crowdpanel-comments-like-count-',
    K = 'crowdpanel-comments-footer-area',
    Q = null;
  const Y = 'https://server.crowdpanel.co';
  let Z = parent.location.pathname;
  const ee = [],
    te = [];
  let ne,
    oe,
    ie,
    ae,
    re,
    le = 0,
    ce = !1,
    de = !1,
    ue = null,
    se = {},
    me = {},
    pe = {},
    ge = {},
    ve = !1,
    fe = !1;
  function he(e) {
    return t.createElement(e);
  }
  function we(e, t) {
    e.classList.add('crowdpanel-comments-' + t);
  }
  function _e(...e) {
    if (void 0 !== e && e.length > 2) {
      let t = e.slice(0, -1),
        n = e.slice(-1)[0];
      t.forEach((e) => {
        e.classList.add('crowdpanel-comments-' + n);
      });
    }
  }
  function be(...e) {
    if (void 0 !== e && e.length > 2) {
      let t = e.slice(0, -1),
        n = e.slice(-1)[0];
      t.forEach((e) => {
        e.classList.remove('crowdpanel-comments-' + n);
      });
    }
  }
  function ye(e, t) {
    e.appendChild(t);
  }
  function ke(e, t) {
    e.prepend(t);
  }
  function xe(e) {
    return t.getElementById(e);
  }
  function Te(e) {
    null !== e && e.parentNode.removeChild(e);
  }
  function je(e, t) {
    null !== e && e.classList.remove('crowdpanel-comments-' + t);
  }
  function Ce(e) {
    e.classList.add('crowdpanel-comments-dark');
  }
  function Le(e) {
    if (null !== e) {
      let t = e.cloneNode(!0);
      if (null !== e.parentNode) return e.parentNode.replaceChild(t, e), t;
    }
    return e;
  }
  function Me(e, t, n) {
    e.addEventListener(
      'click',
      function () {
        t(n);
      },
      !1
    );
  }
  function Se(e, t, n) {
    e.setAttribute(t, n);
  }
  function Ee(e, t, n) {
    e.removeAttribute(t, n);
  }
  function Ae() {
    let e = ('; ' + t.cookie).split('; crowdpanel-widget-token=');
    if (2 === e.length) return e.pop().split(';').shift();
  }
  function Ne(e) {
    let n = '',
      o = new Date();
    o.setTime(o.getTime() + 2592e6),
      (n = '; expires=' + o.toUTCString()),
      (t.cookie = 'crowdpanel-widget-token=' + e + n + '; path=/');
  }
  function Re(e, t, n) {
    let o = new XMLHttpRequest();
    o.open('POST', e, !0),
      o.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      (o.onload = function () {
        n(JSON.parse(o.response));
      }),
      o.send(JSON.stringify(t));
  }
  function Be(e) {
    'function' == typeof e && e();
  }
  function He(e) {
    (ee.length = 0), (Z = '/' === Z ? 'index' : Z.replace(/\//, ''));
    let n = {
      domain: parent.location.host,
      path: Z,
      title: t.title,
      userId: se.user_id,
    };
    Re(Y + '/api/widget/comment/main', n, function (t) {
      if (t.error) return void ze(t.error.message);
      Ke(),
        (re = t.data[0].domain_id),
        (ae = t.data[0].page_id),
        te.push(...t.data[0].moderators);
      let n = t.data.slice(1);
      (le = t.data[0].comment_count || 0),
        ve
          ? te.indexOf(se.email) > -1
            ? ((ce = !0), ee.push(...n))
            : n &&
              n.forEach((e) => {
                e.author_id === se.user_id
                  ? ((e.isCommentAuthor = !0), ee.push(e))
                  : 'active' === e.status && ee.push(e);
              })
          : n.forEach((e) => {
              'active' === e.status && ee.push(e);
            }),
        (oe = t.data[0].reaction),
        (de = t.data[0].anonymous && !ve),
        (me = {
          self_moderate: t.data[0].self_moderate,
          likes: t.data[0].likes,
          voting: t.data[0].voting,
          emojis: t.data[0].emojis,
          time_stamp: t.data[0].time_stamp,
          emails: t.data[0].moderator_emails,
          anon: t.data[0].anonymous,
        }),
        (pe = {
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
        Be(e);
    });
  }
  function De(e) {
    let t = he('div'),
      n = he('div'),
      o = he('textarea'),
      i = he('button'),
      a = he('div');
    if (
      ((t.id = r + e),
      (n.id = d),
      (o.id = l + e),
      (i.id = p + e),
      we(t, 'textarea-container'),
      we(o, 'textarea'),
      we(a, 'anon-container'),
      fe && Ce(o),
      we(i, 'submit-button'),
      0 == ee.length && 'root' == e
        ? Se(o, 'placeholder', 'Be the first to comment')
        : Se(o, 'placeholder', 'Add a comment'),
      'root' !== e && Se(t, 'style', 'padding-left: 40px'),
      (i.innerText = 'COMMENT'),
      (o.oninput = (function (e, t) {
        return function () {
          if (
            ((e.style.height = ''),
            (e.style.height =
              Math.min(Math.max(e.scrollHeight, 75), 400) + 'px'),
            de)
          ) {
            let n = xe(v + t);
            e.value.length > 0
              ? (Ee(n, 'style', 'display: none'),
                Se(n, 'style', 'display: block'))
              : (Ee(n, 'style', 'display: block'),
                Se(n, 'style', 'display: none'));
          }
        };
      })(o, e)),
      Me(i, Ge, e),
      de)
    ) {
      let t = he('input');
      Se(t, 'type', 'text'),
        Se(t, 'placeholder', 'Name'),
        (t.required = !0),
        (t.id = v + e),
        we(t, 'anon-input'),
        Se(t, 'style', 'display: none'),
        ye(a, t);
    }
    return ye(t, n), ye(t, o), ye(a, i), ye(t, a), t;
  }
  function Ie(e, t) {
    t
      ? (Se(e, 'style', 'border: none'), we(e, 'toggle--loading'))
      : (Se(e, 'style', 'color: transparent'), we(e, 'button--loading'));
  }
  function Oe(e, t) {
    t
      ? (Ee(e, 'style', 'border: none'), je(e, 'toggle--loading'))
      : (Se(e, 'style', 'color: white'), je(e, 'button--loading'));
  }
  function Fe(e) {
    return Math.abs(e) > 999
      ? Math.sign(e) * (Math.abs(e) / 1e3).toFixed(1) + 'k'
      : Math.sign(e) * Math.abs(e);
  }
  function qe(e) {
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
  function Pe(e) {
    let t = xe(N);
    t.innerHTML = '';
    let n = nt(e, 'root');
    n && ye(t, n);
  }
  function Ge(t) {
    Ie(xe(p + t)),
      ve
        ? e.newComment(t, Ae())
        : de
        ? e.newAnonComment(t)
        : (Oe(xe(p + t)), e.loginBoxShow(t));
  }
  function Ue(e) {
    xe(F + e).classList.toggle('crowdpanel-comments-dropdown-opened');
  }
  function $e(t) {
    let n = xe(H + t),
      o = xe(D + t),
      i = xe(O + t);
    je(o, 'comments-toggle-up'),
      we(o, 'comments-toggle-down'),
      Se(i, 'style', 'display: block'),
      e.loadChildren(t),
      Me((n = Le(n)), Je, t);
  }
  function Je(e) {
    let t = xe(H + e),
      n = xe(D + e),
      o = xe(I + e),
      i = xe(O + e);
    je(n, 'comments-toggle-down'),
      we(n, 'comments-toggle-up'),
      Se(i, 'style', 'display: none'),
      Se(o, 'style', 'display: none'),
      Me((t = Le(t)), We, e);
  }
  function We(e) {
    let t = xe(H + e),
      n = xe(D + e),
      o = xe(I + e),
      i = xe(O + e);
    je(n, 'comments-toggle-up'),
      we(n, 'comments-toggle-down'),
      Se(i, 'style', 'display: block'),
      Ee(o, 'style', 'display: none'),
      Me((t = Le(t)), Je, e);
  }
  function Ve(t, n, o, i, a) {
    return (
      (t = Le(t)),
      (n = Le(n)),
      i > 0
        ? (Me(t, e.voteComment, [o, [1, 0], a]),
          Me(n, e.voteComment, [o, [1, -1], a]))
        : i < 0
        ? (Me(t, e.voteComment, [o, [-1, 1], a]),
          Me(n, e.voteComment, [o, [-1, 0], a]))
        : (Me(t, e.voteComment, [o, [0, 1], a]),
          Me(n, e.voteComment, [o, [0, -1], a])),
      [t, n]
    );
  }
  function Xe(t, n, o, i) {
    return Me((t = Le(t)), e.likeRequest, [n, !o, i]), t;
  }
  function ze(e) {
    let t = xe(i);
    (t.innerText = e), Se(t, 'style', 'display: block;');
  }
  function Ke() {
    Se(xe(i), 'style', 'display: none;');
  }
  function Qe(e) {
    if (oe) {
      let e = xe(_),
        t = xe(b),
        n = xe(y),
        o = xe(k),
        i = xe(x),
        a = xe(T);
      switch ((_e(e, t, n, o, i, a, 'emoji-unactive'), oe)) {
        case 'like':
          je(e, 'emoji-unactive'), we(e, 'emoji-active');
          break;
        case 'love':
          je(t, 'emoji-unactive'), we(t, 'emoji-active');
          break;
        case 'laugh':
          je(n, 'emoji-unactive'), we(n, 'emoji-active');
          break;
        case 'wow':
          je(o, 'emoji-unactive'), we(o, 'emoji-active');
          break;
        case 'sad':
          je(i, 'emoji-unactive'), we(i, 'emoji-active');
          break;
        case 'angry':
          je(a, 'emoji-unactive'), we(a, 'emoji-active');
      }
    }
    Be(e);
  }
  function Ye() {
    let t,
      n = he('div'),
      o = he('div'),
      i = he('span');
    i.innerText = se.full_name;
    let a = he('button');
    return (
      (n.id = d),
      (a.id = m),
      we(a, 'button'),
      we(n, 'logging-container'),
      we(o, 'logging-container-left-div'),
      fe && (Ce(a), Ce(o)),
      (a.innerText = 'Logout'),
      Me(a, e.logout, null),
      se.avatar_url
        ? (((t = he('img')).src = se.avatar_url), we(t, 'author-avatar-img'))
        : (((t = he('div')).style.background = qe(se.full_name)),
          (t.innerHTML = se.full_name
            .match(/(^\S\S?|\b\S)?/g)
            .join('')
            .match(/(^\S|\S$)?/g)
            .join('')
            .toUpperCase()),
          we(t, 'author-avatar-alpha')),
      (de = !1),
      ye(o, t),
      ye(o, i),
      ye(n, a),
      ye(n, o),
      n
    );
  }
  function Ze() {
    let t = he('div'),
      n = he('button');
    return (
      (t.id = u),
      (n.id = s),
      we(n, 'button'),
      fe && Ce(n),
      we(t, 'logging-container'),
      (n.innerText = 'Login'),
      Me(n, e.loginBoxShow, null),
      (de = me.anon),
      ye(t, n),
      t
    );
  }
  function et(e) {
    Te(xe(u)), ye(xe(c), Ye()), Be(e);
  }
  function tt(t, n, o) {
    let i = he('div'),
      a = he('button'),
      r = he('div');
    if (
      ((a.id = q + t),
      (r.id = F + t),
      we(a, 'icon-button-menu'),
      we(i, 'dropdown'),
      fe && Ce(a),
      we(r, 'dropdown-content'),
      Me(a, Ue, t),
      ce && ('flagged' === n || 'pending' === n))
    ) {
      let n = he('span');
      (n.id = P + t),
        (n.innerText = 'Approve'),
        Me(n, e.approveComment, t),
        ye(r, n);
    }
    if (ce || o) {
      let n = he('span');
      (n.innerText = 'Delete'), Me(n, e.deleteComment, t), ye(r, n);
    }
    return ye(i, a), ye(i, r), i;
  }
  function nt(t, n) {
    let o = he('div'),
      i = new Date();
    return (
      t.forEach(function (t) {
        let n,
          a = new Date(t.created_at),
          r = he('div'),
          l = he('div'),
          c = he('div'),
          d = he('div'),
          u = he('div'),
          s = he('div'),
          m = he('div'),
          p = he('div'),
          g = he('div'),
          v = he('span'),
          f = he('div'),
          h = he('div'),
          w = he('div'),
          _ = he('div'),
          b = he('div'),
          y = he('div'),
          k = he('span'),
          x = he('span'),
          T = he('span');
        (l.id = B + t.id),
          (g.id = I + t.id),
          (r.id = R + t.id),
          (h.id = D + t.id),
          (y.id = H + t.id),
          (u.id = O + t.id),
          we(r, 'total-container'),
          we(l, 'comment-container'),
          we(g, 'comment-child-container'),
          we(c, 'comment-left'),
          we(d, 'comment-right'),
          we(s, 'comment-head'),
          we(m, 'comment-body'),
          we(p, 'comment-footer'),
          we(u, 'comment-border'),
          we(f, 'comment-toggle-container'),
          we(x, 'comment-date'),
          we(k, 'author-name'),
          fe && (Ce(m), Ce(x), Ce(k), Ce(v), Ce(T)),
          we(v, 'reply-button'),
          we(h, 'comments-toggle'),
          we(h, 'comments-toggle-up'),
          we(T, 'comment-reply-count'),
          we(w, 'author-name-container'),
          we(_, 'comment-head-left-container'),
          we(b, 'footer-actions-container'),
          we(y, 'comment-count-container'),
          (m.innerHTML = t.comment_text),
          (k.innerText = t.full_name);
        let j = te.indexOf(t.email) > -1;
        if (
          ((x.innerHTML = (function (e, t) {
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
          (x.title = a),
          (v.id = $ + t.id),
          (v.innerHTML = 'Reply'),
          (T.innerHTML = t.children_count),
          Me(v, e.showReply, t.id),
          Me(y, $e, t.id),
          t.avatar_url
            ? (((n = he('img')).src = t.avatar_url), we(n, 'author-avatar-img'))
            : (((n = he('div')).style.background = qe(t.full_name)),
              (n.innerHTML =
                t.full_name
                  .match(/(^\S\S?|\b\S)?/g)
                  .join('')
                  .match(/(^\S|\S$)?/g)
                  .join('')
                  .toUpperCase() || '?'),
              we(n, 'author-avatar-alpha')),
          (n.id = G),
          ye(c, n),
          ye(w, k),
          (j || 'active' !== t.status) &&
            ye(
              w,
              (function (e, t, n) {
                let o = he('span');
                return (
                  we(o, 'comment-badge'),
                  (o.id = U + e),
                  n
                    ? we(o, 'comment-badge-moderator')
                    : 'flagged' === t
                    ? (we(o, 'comment-badge-flagged'),
                      (o.innerHTML = 'FLAGGED'))
                    : 'pending' === t &&
                      (we(o, 'comment-badge-pending'),
                      (o.innerHTML = 'PENDING')),
                  o
                );
              })(t.id, t.status, j)
            ),
          ye(_, w),
          me.time_stamp && ye(_, x),
          ye(s, _),
          ve
            ? ce
              ? ye(s, tt(t.id, t.status, t.isCommentAuthor))
              : t.isCommentAuthor &&
                ye(s, tt(t.id, t.status, t.isCommentAuthor))
            : de &&
              t.isCommentAuthor &&
              ye(s, tt(t.id, t.status, t.isCommentAuthor)),
          me.voting)
        ) {
          let n = he('button'),
            o = he('button'),
            i = he('div'),
            a = he('span');
          if (((n.id = J + t.id), (o.id = W + t.id), (a.id = X + t.id), ve)) {
            t.vote_value > 0
              ? we(n, 'vote-active')
              : t.vote_value < 0 && we(o, 'vote-active');
            let e = Ve(n, o, t.id, t.vote_value, t.like_id);
            (n = e[0]), (o = e[1]);
          } else Me(n, e.loginBoxShow, null), Me(o, e.loginBoxShow, null);
          we(n, 'icon-button-upvote'),
            we(o, 'icon-button-downvote'),
            we(a, 'numeral-span'),
            fe && Ce(a),
            we(i, 'footer-voting-container'),
            (a.innerText = Fe(t.vote_count)),
            ye(i, n),
            ye(i, a),
            ye(i, o),
            ye(b, i);
        } else if (me.likes) {
          let n = he('button'),
            o = he('div'),
            i = he('span');
          (n.id = V + t.id),
            (i.id = z + t.id),
            ve
              ? (t.liked && we(n, 'like-active'),
                (n = Xe(n, t.id, t.liked, t.like_id)))
              : Me(n, e.loginBoxShow, null),
            we(n, 'icon-button-like'),
            we(i, 'numeral-span'),
            fe && (Ce(n), Ce(i)),
            we(o, 'footer-likes-container'),
            (i.innerText = Fe(t.like_count)),
            ye(o, n),
            ye(o, i),
            ye(b, o);
        }
        ye(p, v),
          ye(p, b),
          ye(d, s),
          ye(d, m),
          ye(d, p),
          ye(l, c),
          ye(l, d),
          ye(y, T),
          ye(f, h),
          ye(y, f),
          t.children_count > 0 && ye(r, y),
          ye(r, u),
          ye(r, l),
          ye(r, g),
          ye(o, r);
      }),
      o
    );
  }
  function ot() {
    void 0 === ne ? at() : it(ne, at);
  }
  function it(e, n) {
    let o = t.getElementsByTagName('HEAD')[0],
      i = he('link');
    (i.rel = 'stylesheet'),
      (i.type = 'text/css'),
      (i.href = e),
      (function (e, t, n) {
        e.addEventListener('load', function () {
          t(n);
        });
      })(i, n),
      ye(o, i);
  }
  function at() {
    Se(xe(o), 'style', '');
  }
  (e.socialAuth = function (t) {
    let n = { provider: t.provider, domainId: re },
      o = window.open('', '_blank');
    Re(Y + '/api/widget/oauth', n, function (e) {
      (o.location = e.data), (ie = e.token);
    });
    var i = setInterval(function () {
      o.closed &&
        (clearInterval(i),
        Re(Y + '/api/widget/authlogin', { sessionToken: ie }, function (t) {
          if (t.error) return ze(t.error.message), void (ve = !1);
          e.loginBoxClose(),
            Ke(),
            (ve = !0),
            Ne(t[0].user_id),
            (se = t[0]),
            et(function () {
              He(function () {
                Qe(function () {
                  Pe(ee);
                });
              });
            });
        }));
    }, 250);
  }),
    (e.newAnonComment = function (t) {
      let n = xe(l + t),
        o = n.value,
        i = xe(v + t);
      if ('' === o) return we(n, 'red-border'), void Oe(xe(p + t));
      if (de && '' === i.value) return we(i, 'red-border'), void Oe(xe(p + t));
      je(n, 'red-border'), je(i, 'red-border');
      let a = me.self_moderate ? 'pending' : 'active';
      const r = 'root' === t ? null : t;
      let c = {
        full_name: i.value,
        status: a,
        page_id: ae,
        parent_id: r,
        comment_text: o,
        created_at: new Date(),
      };
      Re(Y + '/api/widget/comment/anon', c, function (o) {
        if (o.error || !o) return void Oe(xe(p + t));
        (n.value = ''),
          (i.value = ''),
          Ee(i, 'style', 'display: block'),
          Se(i, 'style', 'display: none'),
          Oe(xe(p + t)),
          'root' !== t && e.collapseReply(t);
        let r = nt(
          [
            {
              id: o.data[0].id,
              full_name: c.full_name,
              avatar_url: null,
              author_id: o.data[0].author_id,
              page_id: o.data[0].page_id,
              comment_text: o.data[0].comment_text,
              status: a,
              parent_id: o.data[0].parent_id,
              vote_count: 0,
              like_count: 0,
              created_at: c.created_at,
              isCommentAuthor: !0,
            },
          ],
          t
        );
        if ('root' !== t) {
          ke(xe(I + t), r);
        } else {
          ke(xe(N), r);
        }
      });
    }),
    (e.newComment = function (t, n) {
      let o = xe(l + t),
        i = o.value;
      if ('' === i) return we(o, 'red-border'), void Oe(xe(p + t));
      je(o, 'red-border');
      let a = 'pending';
      me.self_moderate ? ce && (a = 'active') : (a = 'active');
      let r = {
        author_id: n,
        status: a,
        page_id: ae,
        parent_id: 'root' === t ? null : t,
        comment_text: i,
        created_at: new Date(),
      };
      Re(Y + '/api/widget/comment/new', r, function (n) {
        if (n.error || !n) return void Oe(xe(p + t));
        (o.value = ''), Oe(xe(p + t)), 'root' !== t && e.collapseReply(t);
        let i = nt(
          [
            {
              id: n.data[0].id,
              full_name: se.full_name,
              avatar_url: se.avatar_url,
              author_id: n.data[0].author_id,
              page_id: n.data[0].page_id,
              comment_text: n.data[0].comment_text,
              status: a,
              parent_id: n.data[0].parent_id,
              vote_count: 0,
              like_count: 0,
              created_at: r.created_at,
              isCommentAuthor: !0,
            },
          ],
          t
        );
        if ('root' !== t) {
          ke(xe(I + t), i);
        } else {
          ke(xe(N), i);
        }
      });
    }),
    (e.deleteComment = function (e) {
      if (
        (ce && Ue(e), !confirm('Are you sure you want to delete this comment?'))
      )
        return;
      let t = { id: e, user_id: se.user_id };
      Re(Y + '/api/widget/comment/remove', t, function (t) {
        if (t.error || !t) return;
        let n = xe(R + e);
        'deleted' === t.data[0].status && Se(n, 'style', 'display: none');
      });
    }),
    (e.approveComment = function (e) {
      if ((Ue(e), !ce)) return;
      let t = { id: e, user_id: se.user_id };
      Re(Y + '/api/widget/comment/approve', t, function (t) {
        if (!t.error && t && 'active' === t.data[0].status) {
          let t = xe(U + e),
            n = xe(P + e);
          Se(t, 'style', 'display: none'), Se(n, 'style', 'display: none');
        }
      });
    }),
    (e.loadChildren = function (e) {
      if ('root' === e) return;
      let t;
      Ie(xe(D + e), !0),
        (t = me.voting ? 'votes' : me.likes ? 'likes' : null),
        (json = { parentId: e, userId: se.user_id, votesOrLikes: t }),
        Re(Y + '/api/widget/comment/children', json, function (t) {
          if (t.error || !t) return void Oe(xe(D + e), !0);
          let n = [],
            o = !1;
          ve
            ? ce
              ? n.push(...t.data)
              : t.data.forEach((e) => {
                  e.author_id === se.user_id
                    ? ((e.isCommentAuthor = !0), n.push(e))
                    : 'active' === e.status
                    ? n.push(e)
                    : (o = !0);
                })
            : t.data.forEach((e) => {
                'active' === e.status ? n.push(e) : (o = !0);
              });
          let i = nt(n, e),
            a = xe(I + e);
          if ((i && ke(a, i), o)) {
            let e = he('span');
            we(e, 'no-replies-span'),
              fe && Ce(e),
              (e.innerHTML = '<em>Some comments have been filtered<em>'),
              ke(a, e);
          }
          Oe(xe(D + e), !0);
        });
    }),
    (e.likeRequest = function (e) {
      let t = e[0],
        n = e[1],
        o = e[2],
        i = xe(V + t),
        a = xe(z + t);
      n
        ? (we(i, 'like-active'), (a.innerText = Fe(parseInt(a.innerText) + 1)))
        : (je(i, 'like-active'), (a.innerText = Fe(parseInt(a.innerText) - 1)));
      var r = {
        user_id: se.user_id,
        comment_id: t,
        page_id: ae,
        liked: n,
        likeId: o,
      };
      Re(Y + '/api/widget/comment/like', r, function (e) {
        if (e.error) return;
        Ke();
        let o = e.data[0].id;
        i = Xe(i, t, n, o);
      });
    }),
    (e.voteComment = function (e) {
      let t = e[0],
        n = e[1][0],
        o = e[1][1],
        i = e[2],
        a = xe(J + t),
        r = xe(W + t),
        l = xe(X + t);
      var c = {
        user_id: se.user_id,
        comment_id: t,
        page_id: ae,
        vote_val: o,
        voteId: i,
      };
      je(a, 'vote-active'),
        je(r, 'vote-active'),
        o > 0 ? we(a, 'vote-active') : o < 0 && we(r, 'vote-active'),
        (l.innerText = Fe(parseInt(l.innerText) + o - n)),
        Re(Y + '/api/widget/comment/vote', c, function (e) {
          if (e.error) return;
          Ke(), (i = e.data[0].id);
          let n = Ve(a, r, t, o, i);
          (a = n[0]), (r = n[1]);
        });
    }),
    (e.pageReact = function (t) {
      if (!ve && !de) return void e.loginBoxShow((id = null));
      let n,
        o,
        i = xe(_),
        a = xe(b),
        r = xe(y),
        l = xe(k),
        c = xe(x),
        d = xe(T),
        u = xe(j),
        s = xe(C),
        m = xe(L),
        p = xe(M),
        g = xe(S),
        v = xe(E);
      if (
        (be(i, a, r, l, c, d, 'emoji-active'),
        'remove' == (n = oe ? (oe === t ? 'remove' : 'change') : 'new') ||
          'change' == n)
      ) {
        switch (oe) {
          case 'like':
            (ge.like_count = ge.like_count - 1),
              (u.innerText = Fe(ge.like_count));
            break;
          case 'love':
            (ge.love_count = ge.love_count - 1),
              (s.innerText = Fe(ge.love_count));
            break;
          case 'laugh':
            (ge.laugh_count = ge.laugh_count - 1),
              (m.innerText = Fe(ge.laugh_count));
            break;
          case 'wow':
            (ge.wow_count = ge.wow_count - 1), (p.innerText = Fe(ge.wow_count));
            break;
          case 'sad':
            (ge.sad_count = ge.sad_count - 1), (g.innerText = Fe(ge.sad_count));
            break;
          case 'angry':
            (ge.angry_count = ge.angry_count - 1),
              (v.innerText = Fe(ge.angry_count));
        }
        oe = '';
      }
      if ('change' == n || 'new' == n)
        switch ((_e(i, a, r, l, c, d, 'emoji-unactive'), (oe = t), t)) {
          case 'like':
            je(i, 'emoji-unactive'),
              we(i, 'emoji-active'),
              (ge.like_count = ge.like_count + 1),
              (u.innerText = Fe(ge.like_count));
            break;
          case 'love':
            je(a, 'emoji-unactive'),
              we(a, 'emoji-active'),
              (ge.love_count = ge.love_count + 1),
              (s.innerText = Fe(ge.love_count));
            break;
          case 'laugh':
            je(r, 'emoji-unactive'),
              we(r, 'emoji-active'),
              (ge.laugh_count = ge.laugh_count + 1),
              (m.innerText = Fe(ge.laugh_count));
            break;
          case 'wow':
            je(l, 'emoji-unactive'),
              we(l, 'emoji-active'),
              (ge.wow_count = ge.wow_count + 1),
              (p.innerText = Fe(ge.wow_count));
            break;
          case 'sad':
            je(c, 'emoji-unactive'),
              we(c, 'emoji-active'),
              (ge.sad_count = ge.sad_count + 1),
              (g.innerText = Fe(ge.sad_count));
            break;
          case 'angry':
            je(d, 'emoji-unactive'),
              we(d, 'emoji-active'),
              (ge.angry_count = ge.angry_count + 1),
              (v.innerText = Fe(ge.angry_count));
        }
      else be(i, a, r, l, c, d, 'emoji-unactive');
      if (
        (ge.like_count > 0 && Se(u, 'style', 'display: block'),
        ge.love_count > 0 && Se(s, 'style', 'display: block'),
        ge.laugh_count > 0 && Se(m, 'style', 'display: block'),
        ge.wow_count > 0 && Se(p, 'style', 'display: block'),
        ge.sad_count > 0 && Se(g, 'style', 'display: block'),
        ge.angry_count > 0 && Se(v, 'style', 'display: block'),
        se.user_id)
      )
        o = se.user_id;
      else {
        if (!de) return;
        o = null;
      }
      Re(
        Y + '/api/widget/emojireact',
        {
          reaction: t,
          page_id: ae,
          user_id: o,
          action: n,
          currentReactionId: ue,
        },
        function (e) {
          e.error || (ue = e.data[0].id);
        }
      );
    }),
    (e.popupRender = function (t) {
      let n = xe(f),
        o = he('div'),
        i = he('div'),
        a = he('span'),
        r = he('div'),
        l = he('div'),
        c = he('div'),
        d = he('div');
      if (
        ((a.innerHTML = '&times;'),
        we(o, 'modal-area'),
        we(a, 'modal-close'),
        we(i, 'login-modal-content'),
        we(r, 'modal-header'),
        we(l, 'modal-body'),
        we(d, 'social-login-container'),
        we(c, 'modal-footer'),
        Me(a, e.loginBoxClose),
        ye(r, a),
        pe.google)
      ) {
        let t = he('button'),
          n = he('span'),
          o = he('span');
        we(n, 'google-logo'),
          (o.innerText = 'Google'),
          we(t, 'login-button-google'),
          Me(t, e.socialAuth, { provider: 'google' }),
          ye(t, n),
          ye(t, o),
          ye(d, t);
      }
      if (pe.facebook) {
        let t = he('button'),
          n = he('span'),
          o = he('span');
        we(n, 'facebook-logo'),
          (o.innerText = 'Facebook'),
          we(t, 'login-button-facebook'),
          Me(t, e.socialAuth, { provider: 'facebook' }),
          ye(t, n),
          ye(t, o),
          ye(d, t);
      }
      if (pe.github) {
        let t = he('button'),
          n = he('span'),
          o = he('span');
        we(n, 'github-logo'),
          (o.innerText = 'Github'),
          we(t, 'login-button-github'),
          Me(t, e.socialAuth, { provider: 'github' }),
          ye(t, n),
          ye(t, o),
          ye(d, t);
      }
      if ((ye(l, d), pe.sso)) {
        let t = he('button');
        (t.id = ID_LOGIN_SSO),
          (t.innerText = 'Proceed With ' + parent.location.host),
          we(t, 'login-button-sso'),
          Me(t, e.socialAuth, { provider: 'sso' }),
          ye(l, t);
      }
      if (pe.crowdpanel) {
        let n = he('form'),
          o = he('span'),
          i = he('a'),
          a = he('a'),
          r = he('input'),
          d = he('input'),
          u = he('button');
        (n.id = h),
          (r.id = 'crowdpanel-comments-login-box-email'),
          (d.id = 'crowdpanel-comments-login-box-password'),
          (u.id = w),
          (u.innerHTML = 'Login'),
          (o.innerHTML = "Don't have an account?"),
          (a.innerHTML = 'Forgot Password'),
          (i.innerHTML = 'Sign up'),
          we(u, 'login-button-crowdpanel'),
          Se(r, 'type', 'email'),
          Se(r, 'placeholder', 'Email'),
          (r.required = !0),
          Se(d, 'type', 'password'),
          Se(d, 'placeholder', 'Password'),
          (d.required = !0),
          Se(u, 'type', 'submit'),
          Se(a, 'href', 'https://dashboard.crowdpanel.co/forgot-password'),
          Se(i, 'href', 'https://dashboard.crowdpanel.co/signup'),
          Se(i, 'target', '_blank'),
          ye(n, r),
          ye(n, d),
          ye(n, u),
          ye(l, n),
          ye(l, a),
          ye(c, o),
          ye(c, i),
          n.addEventListener('submit', function (n) {
            Ie(u), n.preventDefault(), e.login(n, t);
          });
      }
      ye(i, r), ye(i, l), ye(i, c), ye(o, i), ye(n, o);
    }),
    (e.showReply = function (t) {
      let n = xe(B + t);
      var o, i;
      (o = n), (i = De(t)), o.parentNode.insertBefore(i, o.nextSibling);
      let a = xe($ + t);
      (a.innerText = 'Cancel'), Me((a = Le(a)), e.collapseReply, t);
    }),
    (e.collapseReply = function (t) {
      let n = xe($ + t);
      xe(r + t).remove(),
        (n.innerText = 'Reply'),
        Me((n = Le(n)), e.showReply, t);
    }),
    (e.login = function (t, n) {
      !(function (t, n, o) {
        let i = { email: t, password: n, pageId: ae };
        xe(h).reset(),
          Re(Y + '/api/widget/login', i, function (t) {
            if (t.error || 0 === t.length)
              return Oe(xe(w)), void ze(t.error.message);
            Oe(xe(w)),
              e.loginBoxClose(),
              Ke(),
              (ve = !0),
              Ne(t[0].user_id),
              (se = t[0]),
              et(function () {
                He(function () {
                  Qe(function () {
                    Pe(ee);
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
        (ve = !1),
        (se = {}),
        (userVoted = {}),
        Te(xe(d)),
        ye(xe(c), Ze()),
        (xe(n).innerHTML = ''),
        (ee.length = 0),
        (te.length = 0),
        (ce = !1),
        (de = !1),
        (ve = !1),
        (pe = {}),
        (ge = {}),
        (se = {}),
        (oe = null),
        (ue = null),
        (le = 0),
        e.main(o);
    }),
    (e.loginBoxClose = function () {
      let e = xe(o),
        t = xe(f);
      je(e, 'blurred'), Se(t, 'style', 'display: none');
    }),
    (e.loginBoxShow = function (t) {
      let n = xe(o),
        i = xe(f);
      e.popupRender(t),
        we(n, 'blurred'),
        Se(i, 'style', ''),
        (window.location.hash = f);
    }),
    (e.main = function (t) {
      null !== (Q = xe(n))
        ? ((function () {
            let e = he('div');
            (e.id = f), ye(Q, e);
          })(),
          (function () {
            let e = he('div');
            (e.id = i),
              we(e, 'error-container'),
              Se(e, 'style', 'display: none;'),
              ye(Q, e);
          })(),
          (function () {
            let e = he('div');
            (e.id = o), we(e, 'main-area'), fe && Ce(e);
            Se(e, 'style', 'display: none'), ye(Q, e);
          })(),
          it(
            'https://cdn.jsdelivr.net/gh/crowdpanel/widgets/css/comments.min.css',
            ot
          ),
          (function (e) {
            let t = Ae();
            if (!t) return (ve = !1), void Be(e);
            Re(Y + '/api/widget/self', { userToken: t }, function (t) {
              !t.error && t ? ((ve = !0), (se = t.data), Be(e)) : Be(e);
            });
          })(function () {
            He(function () {
              !(function (t) {
                let n = xe(o);
                ye(
                  n,
                  (function () {
                    let t = he('div'),
                      n = he('div');
                    (t.id = a),
                      (n.id = c),
                      me.emojis &&
                        ye(
                          t,
                          (function () {
                            let t = he('div'),
                              n = he('div'),
                              o = he('div'),
                              i = he('div'),
                              a = he('div'),
                              r = he('div'),
                              l = he('div'),
                              c = he('div'),
                              d = he('button'),
                              u = he('button'),
                              s = he('button'),
                              m = he('button'),
                              p = he('button'),
                              g = he('button'),
                              v = he('span'),
                              f = he('span'),
                              h = he('span'),
                              w = he('span'),
                              A = he('span'),
                              N = he('span'),
                              R = he('span'),
                              B = he('span'),
                              H = he('span'),
                              D = he('span'),
                              I = he('span'),
                              O = he('span');
                            (R.innerText = 'Like'),
                              (B.innerText = 'Love'),
                              (H.innerText = 'Funny'),
                              (D.innerText = 'Wow'),
                              (I.innerText = 'Sad'),
                              (O.innerText = 'Angry'),
                              (d.id = _),
                              (s.id = b),
                              (m.id = y),
                              (u.id = k),
                              (p.id = x),
                              (g.id = T),
                              (v.id = j),
                              (h.id = C),
                              (w.id = L),
                              (f.id = M),
                              (A.id = S),
                              (N.id = E),
                              Me(d, e.pageReact, 'like'),
                              Me(s, e.pageReact, 'love'),
                              Me(m, e.pageReact, 'laugh'),
                              Me(u, e.pageReact, 'wow'),
                              Me(p, e.pageReact, 'sad'),
                              Me(g, e.pageReact, 'angry'),
                              _e(R, B, H, D, I, O, 'tooltip-text'),
                              we(n, 'emojis-container'),
                              _e(o, a, r, i, l, c, 'emoji-container'),
                              we(d, 'emoji-like'),
                              we(s, 'emoji-love'),
                              we(m, 'emoji-laugh'),
                              we(u, 'emoji-wow'),
                              we(p, 'emoji-sad'),
                              we(g, 'emoji-angry'),
                              _e(v, h, w, f, A, N, 'emoji-count'),
                              (v.innerText = Fe(ge.like_count)),
                              (h.innerText = Fe(ge.love_count)),
                              (w.innerText = Fe(ge.laugh_count)),
                              (f.innerText = Fe(ge.wow_count)),
                              (A.innerText = Fe(ge.sad_count)),
                              (N.innerText = Fe(ge.angry_count)),
                              ge.like_count < 1 &&
                                Se(v, 'style', 'display: none');
                            ge.love_count < 1 &&
                              Se(h, 'style', 'display: none');
                            ge.laugh_count < 1 &&
                              Se(w, 'style', 'display: none');
                            ge.wow_count < 1 && Se(f, 'style', 'display: none');
                            ge.sad_count < 1 && Se(A, 'style', 'display: none');
                            ge.angry_count < 1 &&
                              Se(N, 'style', 'display: none');
                            return (
                              ye(o, d),
                              ye(o, v),
                              ye(d, R),
                              ye(a, s),
                              ye(a, h),
                              ye(s, B),
                              ye(r, m),
                              ye(r, w),
                              ye(m, H),
                              ye(i, u),
                              ye(i, f),
                              ye(u, D),
                              ye(l, p),
                              ye(l, A),
                              ye(p, I),
                              ye(c, g),
                              ye(c, N),
                              ye(g, O),
                              (function (...e) {
                                if (void 0 !== e && e.length > 2) {
                                  let t = e.slice(0, -1),
                                    n = e.slice(-1)[0];
                                  t.forEach((e) => {
                                    n.appendChild(e);
                                  });
                                }
                              })(o, a, r, i, l, c, n),
                              ye(t, n),
                              t
                            );
                          })()
                        );
                    ye(t, n),
                      ve && 0 !== Object.keys(se).length
                        ? ye(t, Ye())
                        : ye(t, Ze());
                    ye(t, De('root')),
                      ee.length > 0 &&
                        ye(
                          t,
                          (function () {
                            let e = he('div'),
                              t = he('div'),
                              n = he('div'),
                              o = he('hr'),
                              i = he('span'),
                              a = he('span'),
                              r = he('select');
                            we(e, 'page-selection-container'),
                              we(n, 'page-comments-container'),
                              we(a, 'page-count-span'),
                              we(i, 'page-numeral-span'),
                              we(t, 'page-actions-container'),
                              Se(a, 'style', 'margin-left: 4px'),
                              (i.innerText = le),
                              1 == ee.length
                                ? (a.innerText = 'comment')
                                : (a.innerText = 'comments');
                            (r.id = g), fe && (Ce(r), Ce(a), Ce(i));
                            let l = he('option'),
                              c = he('option'),
                              d = he('option');
                            return (
                              (l.id = 'newest'),
                              (c.id = 'oldest'),
                              (d.id = 'top'),
                              (l.textContent = 'Newest'),
                              (c.textContent = 'Oldest'),
                              (d.textContent = 'Top'),
                              r.addEventListener('change', function (e) {
                                !(function (e) {
                                  let t = [];
                                  'Top' === e
                                    ? (t = me.voting
                                        ? ee.sort(
                                            (e, t) =>
                                              Number(t.vote_count) -
                                              Number(e.vote_count)
                                          )
                                        : me.likes
                                        ? ee.sort(
                                            (e, t) =>
                                              Number(t.like_count) -
                                              Number(e.like_count)
                                          )
                                        : [...ee])
                                    : 'Oldest' === e
                                    ? (t = ee.sort(
                                        (e, t) => Number(e.id) - Number(t.id)
                                      ))
                                    : 'Newest' === e &&
                                      (t = ee.sort(
                                        (e, t) => Number(t.id) - Number(e.id)
                                      )),
                                    Pe(t);
                                })(e.target.value);
                              }),
                              ye(n, i),
                              ye(n, a),
                              ye(r, l),
                              ye(r, c),
                              ye(r, d),
                              ye(t, n),
                              ye(t, r),
                              ye(e, t),
                              ye(e, o),
                              e
                            );
                          })()
                        );
                    return t;
                  })()
                ),
                  ye(
                    n,
                    (function () {
                      let e = he('div'),
                        t = he('div');
                      (e.id = A), (t.id = N), we(t, 'comment-area');
                      let n = nt(ee, 'root');
                      n && ye(t, n);
                      return ye(e, t), e;
                    })()
                  ),
                  ye(
                    n,
                    (function () {
                      let e = he('div');
                      e.id = K;
                      let t = he('hr'),
                        n = he('a'),
                        o = he('div'),
                        i = he('a');
                      fe && Ce(n);
                      return (
                        we(o, 'footer-container'),
                        we(i, 'icon-button-markdown'),
                        (n.innerHTML = 'Powered by Crowdpanel'),
                        Se(n, 'href', 'https://crowdpanel.co'),
                        Se(n, 'target', '_blank'),
                        Se(i, 'href', 'https://docs.crowdpanel.co/#/markdown'),
                        Se(i, 'target', '_blank'),
                        ye(e, t),
                        ye(o, i),
                        ye(o, n),
                        ye(e, o),
                        e
                      );
                    })()
                  ),
                  Be(t);
              })(function () {
                Qe(function () {
                  at();
                });
              });
            });
          }))
        : console.log(
            "Please embed the 'crowdpanel-comments' div onto your webpage"
          );
    });
  let rt = !1;
  function lt() {
    rt ||
      ((rt = !0),
      (function () {
        for (var e = t.getElementsByTagName('script'), n = 0; n < e.length; n++)
          e[n].src.match(/\/crowdpanel-comments\.js$/) &&
            ('dark' === e[n].dataset.theme && (fe = !0),
            e[n].dataset.customCss && (ne = e[n].dataset.customCss));
      })(),
      e.main(void 0));
  }
  let ct = function () {
    let e = t.readyState;
    'loading' === e
      ? t.addEventListener('readystatechange', ct)
      : 'interactive' === e
      ? lt()
      : 'complete' === e && lt();
  };
  ct();
})(window, document);
