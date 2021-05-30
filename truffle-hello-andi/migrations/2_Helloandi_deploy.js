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
