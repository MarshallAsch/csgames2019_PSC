import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({

  actions: {
    addjob() {
      console.log(this.getProperties('description','salary','work_universe','required_skills','education'))
      let {description,salary,work_universe,required_skills,education} = this.getProperties('description','salary','work_universe','required_skills','education')
      $.ajax({
        url: "http://10.202.27.216:8080/api/v1/jobs/",
        type: "POST",
        contentType:"application/json",
        data: JSON.stringify({
          "description_en" : "Hello World",
          "description_fr" : "Hello World",
          "salary" : "200",
          "location": {lattitude: 10, longitude: 10, "address": "123 road"},
          "work_universe": 1,
          "required_skills": ["AllOfThem"],
          "education" : 100

        })
      }).then(function(resp){
        console.log(resp);
      }).catch(function(error){
        // console.log(error);
      });
    }
  }
});
