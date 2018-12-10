var Menu = (function() {
  var Menu = function() {}
  Menu.prototype.MAIN_MENU = 0
  Menu.prototype.bind = function(game, target, type) {
    this.view = target
    this.game = game
    this.score = new Score()
    this.score.initParse()
    if (type === this.MAIN_MENU)
      this.setListeners()
  }
  Menu.prototype.show = function() {
    this.view.classList.remove('display-none')
  }
  Menu.prototype.hide = function() {
    this.view.classList.add('display-none')
  }
  Menu.prototype.setListeners = function() {
    var menu = this
    this.view.querySelector('#start-btn').addEventListener('click', function(e) {
      menu.game.start()
      menu.hide()
      if (menu.game.isLose) {
        menu.game.restart()
      }
    })
    this.view.querySelector('#restart-btn').addEventListener('click', function(e) {
      menu.game.restart()
      menu.game.start()
      menu.hide()
    })
  }
  return Menu
})()
