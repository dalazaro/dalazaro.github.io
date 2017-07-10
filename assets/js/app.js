// define globals
console.log('sanity check');

//define endpoint
var repoEndpoint = 'https://api.github.com/users/dalazaro/repos';


//when info is gathered
$(document).ready(function() {

  //callback for listing quake data/markers
  listRepos();

});


//function for gathering quake locations and marker settings
function listRepos(dataResponse) {

  $.ajax({

    method: 'GET',
    url: repoEndpoint,
    dataType: 'json',
    success: function(dataResponse){


      //defining unnamed Object as variable
      var repositories = dataResponse;
      console.log(repositories);

      //for each location, create a list item and marker
      repositories.forEach(function listAndAnchor(repo) {

        //List item of earthquake info
        var link = repo.html_url;
        var title = repo.name;
        var date = repo.created_at.substr(0, 10);

        $('#listOfRepositories').append(`<li><a class="body-link" href="${link}" target="blank">[${title}]</a> (${date})</li>`);


      });

    }

  });

};
