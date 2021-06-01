const Helloandi = artifacts.require('Helloandi');

module.exports = (deployer, network, accounts) => {    // function(deployer, network, accounts) {
    deployer.deploy(Helloandi).then(instance => {     // .then(function(instance) {
        instance.setMessage('Hello Ruca-Pillan!').then(() => {   // .then(function() {
            instance.getMessage().then(message => {        // .then(function(message) {
                console.log(`Current Message: ${message}`);   // ('Current Message: ' + message);
            }).catch(err => console.log(` **GETMESSAGE** ${err}`));
        }).catch(err => console.log(` **SETMESSAGE** ${err}`));
        // .catch(function(err) {
        //    console.log(` **SET/GETMESSAGE** ${err}`);
        //  });
    });
};





/*





const Helloandi = artifacts.require("Helloandi");

module.exports = async function(deployer, network, accounts) {
                  // async (deployer, network, accounts) => {
    try {
        await deployer.deploy(Helloandi);
        let instance = await Helloandi.deployed();
        await instance.setMessage("Hello EL SUL!");
        let message = await instance.getMessage();
        console.log(`Current Message: ${message}`);
    }
    catch (err) {
        console.log(`*You've got an error* ${err}`);
    }
};


const Helloandi = artifacts.require("Helloandi");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Helloandi).then(function(instance){
        instance.setMessage('Hello Ruca', {value: 1000000, from: accounts [0]}).then(function(){
            console.log('success');
        }).catch(function(err){
            console.log('error: ' + err);
        });
    });
};






*/