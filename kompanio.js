



if (Meteor.isClient) {



  Template.app.helpers({

    username: function(){




    },


  });




  Template.app.events({
    'submit form': function(event, template){
      event.preventDefault();


      var userName = template.find('#userName').value;
      Meteor.users.update({_id: Meteor.user()._id}, {$set: {"profile.name":userName}});

      var user = Meteor.users.find({_id: Meteor.user()._id});
      //console.log(user.profile);



    }//'submit form'


  })







}// /isClient







if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
