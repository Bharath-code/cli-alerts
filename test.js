import alert from "./index.js";
alert();
alert({
  type: 'warning',
  msg: 'This is a warning message',
  name: ``
});
alert({ type: `success`, msg: `Everthing finished`, name: `DONE` })
alert({ type: `info`, msg: `This is an information message`, name: `` })
alert({ type: `info`, msg: `Remember to update`, name: `REMEMBER` })
alert({ type: `error`, msg: `Something went wrong`, name: `` })



// `✅ SUCCESS: All done!`
