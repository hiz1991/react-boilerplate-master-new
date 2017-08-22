// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
import axios from 'axios';
let requestSucceeded = false;
export default (async function requestVerify(values) {
    console.log(values);

  // await sleep(500); // simulate server latency
  //  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  //   const addTodo = function (val) {
  //       console.log(val);
  //
  //       state.showCodePart = true;
  //       let tu;
  //       return tu();
  //   };
    // Add todo handler

        let url = "/requestCode";
        // Assemble data
        const todo = {phoneNumber: values.phoneNumber};
        if(values.confirmationCode){
            url = "/verifyCode";
        }
        // Update data
        return axios.post(url, todo)
            .then((res) => {
                console.log(res)
                if(res.data.success){
                    if(url === "/verifyCode"){
                        alert("super");
                    } else {
                        return true;
                        // this.setState({ showResults: true });
                    }
                    // this.setState({ showResults: true });
                }
                return res.data.success;
            });

});


