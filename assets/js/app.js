var repoEndpoint = 'https://api.github.com/users/dalazaro/repos';

$(document).ready(function() {

  $('.parallax').parallax();

  //callback for listing repos
  listRepos();

  $('.modal').modal();

});

function listRepos(dataResponse) {

  $.ajax({
    method: 'GET',
    url: repoEndpoint,
    dataType: 'json',
    success: function(dataResponse){

      //defining unnamed Object as variable
      var repositories = dataResponse;
      // console.log(repositories);

      //for each location, create a list item and marker
      repositories.forEach(function listAndAnchor(repo) {

        //List item of repository info
        var link = repo.html_url;
        var title = repo.name;
        var date = repo.created_at.substr(5, 5);

        $('#listOfRepositories').append(`<li><a class="body-link" href="${link}" target="blank">[${title}]</a> (${date})</li>`);

      });
    }
  });
};
