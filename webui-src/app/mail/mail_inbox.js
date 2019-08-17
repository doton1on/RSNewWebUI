const m = require('mithril');
const rs = require('rswebui');
const util = require('mail_util');


const Layout = () => {
  return {
    oninit: (v) => {},
    view: (v) => [
      m('.widget', [
        m('h3', 'Inbox'),
        m('hr'),
        m(util.Table, m('tbody', v.attrs.list.map(
          (msg) => m(util.MessageSummary, {
            details: msg,
          })
        ))),
      ]),
    ]
  };
};

module.exports = Layout;

