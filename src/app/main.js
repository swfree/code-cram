var currentFiles;
function getFolderNames () {
  $.get('http://localhost:3000/categories', function(response) {
    var $sidebarSmall = $('.sidebar-sm');
    var htmlToAdd;
    response.forEach(function(folderName, index) {
      htmlToAdd = '<div class="sidebar-icon" onclick="getFileNames(' + "'" + folderName + "'" + '); changeFolderHighlight(' + index + ')"><div class="sidebar-sm-text">' + folderName.slice(0, 3).toUpperCase() + '</div></div>';
      $sidebarSmall.append(htmlToAdd);
    });

    getFileNames(response[0]);
    changeFolderHighlight(0);
  });
}
getFolderNames();

function getFileNames (folderName) {
  $.get('http://localhost:3000/questions/' + folderName, function(response) {
    currentFiles = response;

    var $sidebarLarge = $('.sidebar-lg');
    $sidebarLarge.html('');
    var htmlToAdd;
    response.forEach(function(question, index) {
      htmlToAdd = '<div class="sidebar-lg-text" onclick=getMainBody(' + index + ')>' + question.question.slice(0,20) + '...</div>';
      $sidebarLarge.append(htmlToAdd);
    });

    getMainBody(0);
  });
}

function getMainBody(index) {
  var $mainText = $('.main-text');
  var mainBody = '<b>' + currentFiles[index].question + '</b><hr><br><br><br>' + currentFiles[index].answer;
  $mainText.html(mainBody);
}

var priorSelection;
function changeFolderHighlight(index) {
  if (priorSelection !== 0) {
    priorSelection = priorSelection || index;
  }
  toRemove = priorSelection + 1;
  toAdd = index + 1;
  $('div.sidebar-sm div.sidebar-icon:nth-child(' + toRemove + ')').removeClass('sidebar-icon-selected');
  $('div.sidebar-sm div.sidebar-icon:nth-child(' + toAdd + ')').addClass('sidebar-icon-selected');
  priorSelection = index;
}
