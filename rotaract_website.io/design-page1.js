!(function() {
  'use strict';
  var s = function(n) {
      return /^\d+$/.test(n);
    },
    _ = {},
    n = (function(n, t) {
      for (var a = 0, i = n; a < i.length; a++) {
        var r = i[a],
          e = parseInt(r, 10) % 100 < t,
          r = _.hasOwnProperty(r);
        if (e || r) return !0;
      }
      return !1;
    })(
      (function(n) {
        var t = {},
          a = [];
        if (
          (n._bizo_data_partner_id && ((t[n._bizo_data_partner_id] = !0), a.push(n._bizo_data_partner_id)),
          n._bizo_data_partner_ids)
        )
          for (var i = 0, r = n._bizo_data_partner_ids; i < r.length; i++)
            !t[(e = r[i])] && s(e) && ((t[e] = !0), a.push(e));
        if (
          (n._linkedin_data_partner_id &&
            !t[n._linkedin_data_partner_id] &&
            ((t[n._linkedin_data_partner_id] = !0), a.push(n._linkedin_data_partner_id)),
          n._linkedin_data_partner_ids)
        )
          for (var e, _ = 0, d = n._linkedin_data_partner_ids; _ < d.length; _++)
            !t[(e = d[_])] && s(e) && ((t[e] = !0), a.push(e));
        return a;
      })(window),
      50
    )
      ? 'https://snap.licdn.com/li.lms-analytics/insight.beta.min.js'
      : 'https://snap.licdn.com/li.lms-analytics/insight.old.min.js',
    t = document.createElement('script'),
    a = document.getElementsByTagName('script')[0];
  (t['async'] = !0), (t.src = n), a.parentNode && a.parentNode.insertBefore(t, a);
})();
