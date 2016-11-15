^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Changelog for package robot_blockly
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

0.1.1 (2016-11-15)
------------------
* Merge pull request `#1 <https://github.com/LCAS/robot_blockly/issues/1>`_ from LCAS/marc-hanheide-patch-1
  adding missing dependency rospy
* adding missing dependency rospy
* changed maintainer
* Merge pull request `#36 <https://github.com/LCAS/robot_blockly/issues/36>`_ from Nestor94Gonzalez/master
  spider and rover manual control
* subrepo update
* rover manual control finished [be careful, its fast]
* spider manual control finished
* manual contorl shows how_to image [unfinished]
* end method fix
* manual control of arrow keys working
* manual control [unfinished], pressed key reaches backend
* Merge pull request `#35 <https://github.com/LCAS/robot_blockly/issues/35>`_ from Nestor94Gonzalez/master
  Node cleanup + spider walk meters
* Kill nodes opened by blockly after execution
* subrepo update
* new spider walk meters block
* Merge pull request `#34 <https://github.com/LCAS/robot_blockly/issues/34>`_ from Nestor94Gonzalez/master
  New blocks and additional functionalities
* remove old images option discarted
* removed debug argument from server.py and backend.py
* subrepo update
* rover avoid obstacles removed
* avoid obstacles renamed to find_path and changed from spider to brain
* subrepo update
* subrepo update
* python2 python3 option
* subrepo update
* jquery file local
* slam block
* remove old images
* subrepo update
* block creation guide link
* subrepo update
* rover stop fix
* remove rover forward and steering blocks
* subrepo update
* clean workspace button
* new blocks & subropo update
* Merge pull request `#32 <https://github.com/LCAS/robot_blockly/issues/32>`_ from Nestor94Gonzalez/master
  Image viewer last image first
* subrepo update
* show last image first
* Merge pull request `#31 <https://github.com/LCAS/robot_blockly/issues/31>`_ from Nestor94Gonzalez/master
  remove alert block
* subrepo update
* Merge pull request `#30 <https://github.com/LCAS/robot_blockly/issues/30>`_ from Nestor94Gonzalez/master
  Camera color location block & Take picture update
* subrepo update
* readme fix
* image viewer addition
* blockly update
* images folder fix
* Merge branch 'master' of https://github.com/erlerobot/robot_blockly
* updating subrepo commits
* images forlder for take_a_picture block
* Merge pull request `#29 <https://github.com/LCAS/robot_blockly/issues/29>`_ from Nestor94Gonzalez/master
  installation instructions updated
* fix
* new installation instructions
* Merge pull request `#28 <https://github.com/LCAS/robot_blockly/issues/28>`_ from Nestor94Gonzalez/master
  new blocks: wait, alert, run code, for n seconds
* updating commits
* new blocks: wait, alert, run code, for n seconds
* Merge pull request `#27 <https://github.com/LCAS/robot_blockly/issues/27>`_ from Nestor94Gonzalez/master
  google merged updates in blockly sub-repo
* google merge updates
* Merge pull request `#26 <https://github.com/LCAS/robot_blockly/issues/26>`_ from Nestor94Gonzalez/new
  spider blocks update
* spider blocks update
* Update README, add LICENSE file, add shadow
* Merge pull request `#25 <https://github.com/LCAS/robot_blockly/issues/25>`_ from Nestor94Gonzalez/end-exec
  End execution ability
* End execution ability
* Merge pull request `#24 <https://github.com/LCAS/robot_blockly/issues/24>`_ from Nestor94Gonzalez/erle-spider
  IMU calibration and Spider turn degrees blocks
* html fix
* IMU calibration & spider degrees blocks
* spider degrees & IMU calibration blocks
* Merge pull request `#19 <https://github.com/LCAS/robot_blockly/issues/19>`_ from `shadow-robot/F#15 <https://github.com/shadow-robot/F/issues/15>`__pause_play_block_status
  Fixes `#15 <https://github.com/LCAS/robot_blockly/issues/15>`_ pause play block status
* Fixed blockly version
* Merged changes from erlerobot master
* Merge pull request `#23 <https://github.com/LCAS/robot_blockly/issues/23>`_ from erlerobot/master
  Merged latest changes from erlerobot
* Include laser and take a picture blocks
* Host name nased web socket url resolution
* Fixed Python 3 compatibility issue
* Fixed blockly version
* Small fix
* Merged changes from latest erle_master
* Merge pull request `#22 <https://github.com/LCAS/robot_blockly/issues/22>`_ from erlerobot/master
  Merged changes from erle robot master
* frontend: add powered by ROS
* frontend: reactivate Erle-Brain 2 blocks
* blockly: fix python error with import
* blockly: undo timing fixes
* blockly: spider update timing
* frontend: remove Erle-Brain 2 for now
* README update
  Peer coded with @Nestor94Gonzalez and @ahcorde
* Add Erle-Brain 2 blocks
* robot_blockly: Fix CMakeLists.txt to install frontend resources
* blockly: Fix blockly
* Merge pull request `#22 <https://github.com/LCAS/robot_blockly/issues/22>`_ from Nestor94Gonzalez/test
  Self contained web server using python
* conflict fix
* script readme removed
* small changes
* Fix conflicts
* self contained web server, unfinished
* Fixed blockly submodule version
* Integrated load from and save to file functionality
* Merged changes from latest erle_master
* Merge pull request `#21 <https://github.com/LCAS/robot_blockly/issues/21>`_ from erlerobot/master
  Merged recent changes from erlerobot master
* Merge pull request `#16 <https://github.com/LCAS/robot_blockly/issues/16>`_ from Nickolaim/master
  Update web socket endpoint & minor changes to the documentation
* Merge pull request `#18 <https://github.com/LCAS/robot_blockly/issues/18>`_ from shadow-robot/F_add_load_save_to_file
  Added workspace load and save to file ability.
* Merge pull request `#21 <https://github.com/LCAS/robot_blockly/issues/21>`_ from erlerobot/nestor-fix
  Frontend: add Erle-Brain support.
* websocket fix
* erle-brain statusleds update
* Switched code to Python 3
* Fixed code generation in case of empty workspace
* Fixed few PEP8 errors
* Added more solid end-user experience of pause and play.
* Added update of the application in another browser
* Added hidding and showing of the tabs
* Added lock for process run in case of multiple threads
* Wrapped code into try finally to hand completed status correctly
* Fixed close event property name
* Added signle point to execute process
* Added subprocess execution asynchronously
* Fixed few bugs. Moved all JavaScript to separate file.
* Merge remote-tracking branch '`origin/F#15 <https://github.com/origin/F/issues/15>`__pause_play_block_status' into F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status
* Small refactoring
* talker in a class
* Merge branch 'F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status' of github.com:shadow-robot/robot_blockly into F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status
* fixes
* Fixed function names in frontend
* updates
* updates
* oops
* changes
* service server changes
* Merge branch 'F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status' of github.com:shadow-robot/robot_blockly into F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status
  Conflicts:
  scripts/robot_blockly_backend.py
* backend changes
* service changes
* Added separate class for running code state
* Fixed few front-end issues
* Merge branch 'F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status' of https://github.com/shadow-robot/robot_blockly into F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status
* Not tested version of the web browser and web socket server implementations
* service call
* Merge branch 'F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status' of github.com:shadow-robot/robot_blockly into F`#15 <https://github.com/LCAS/robot_blockly/issues/15>`__pause_play_block_status
* add srv
* Added special code injection
* Added workspace load and save to file ability. Tested on Chrome, Firefox on OS Ubuntu and IE 10 on Windows 8.
* Merge branch 'master' of https://github.com/nickolaim/robot_blockly
* Enable stopping robot_blockly_backend.py by Ctrl+C or when the ROS node is killed.
* Merge branch 'master' of https://github.com/nickolaim/robot_blockly
* Fix typo in README.md.
* Use host name from the browser.  It allows blocky be accesed from another machine.
  The script is executed in the browser, so when the address is localhost or 0.0.0.0 it means 'browser's computer'.
  This is not what is expected in most cases.  The address should be 'the same computer where the robot_blocky frontend is running'.
* Readme: Fix minor errors
* blockly: update
* README: Add clone instruction
* Add submodules properly
* Remove unlinked submodules
* robot_blockly updates
* README: fix erle docs link
* Rename package to robot_blockly
* README: indicate renaming
* Rover blocks, small fix
* Merge pull request `#14 <https://github.com/LCAS/robot_blockly/issues/14>`_ from erlerobot/erle-rover
  Erle rover add blocks
* Erle-Rover: add steering and control blocks
* Merge branch 'erle-rover' of https://github.com/erlerobot/ros_blockly
* Merge pull request `#13 <https://github.com/LCAS/robot_blockly/issues/13>`_ from lucasw/capitalization_fix
  Wrongly capitalized L in BlocklyServerProtocol fixed.
* Wrongly capitalized L in Blockly fixed.
* Add new photos
* Update README.md
* Rename package from rosimple to blockly
* Add Erle-Rover forward block
* Merge branch 'master' of https://github.com/erlerobot/ros_rosimple into erle-rover
* Merge pull request `#8 <https://github.com/LCAS/robot_blockly/issues/8>`_ from awesomebytes/unhardcode_url
  Unharcode the url to whatever IP one has
* Unharcode the url to whatever IP one has
* Merge branch 'erle-rover' of https://github.com/erlerobot/ros_rosimple into erle-rover
* Load erle-rover mode change mode into web
* Add docs to README
* Add spider block images
* Add more images
* Add gif
* Update README.md
* Update README.md
* Merge branch 'master' of https://github.com/erlerobot/ros_rosimple
* README updates
* Add Erle Robotics reference
* Fix naming
* Add domain name instead of IP address
* Update README and setup scripts
* Load erle-rover mode change mode into web
* Changes in scripts
* Add some assets
* Add getting started
* Updates in the frontend and instructions for Spider
* Add more stuff to README
* Added short description
* General updates
* Update height of blockly page
* UI: Ubuntu phone
* UI: changes to meet Erle colours
* Fixes onthe frontend
* fix integration of the Graph side, needs work
* Update repository to include the graph side
* Do not include tests.py
* Add ACE editor
* Standup/down fix
* Add apache restart to deploy.sh
* Implement spider commands
* Update deploy script
* Renaming to back/frontend
* Fix websocket for demo with robot
* Make use of deploy script
* Merge branch 'master' of http://github.com/erlerobot/ros_rosimple
* Update readme instructions
* Add deploy script
* Remove vis library
* Merge branch 'master' of https://github.com/erlerobot/ROS_simple
* Recieved petitions from browser and parser by de server
* ROS meta fixes
* ROS meta
* Merge branch 'master' of http://github.com/erlerobot/ros_rosimple
* ROS demo MVP
* Changed name
* Remove test
* Remove old dependencies
* Adapt Index2.html to the new structure of JS
* Add new js structure based on Prototypes
* Add ROS image (compressed) server
* Move graph python websocket server
* Add requirements for the server side
* MVP: rosimple Web-ROS comms
* ROSsify the code
* Fix javascript uncaught exception
* Add local storage
* Merge branch 'master' of https://github.com/erlerobot/ROS_simple
* Modified visjs example
* Add example with D3JS
* Add Erle-Spider blocks
* Add automatic resizing
* Backend graph
* Merge branch 'master' of https://github.com/erlerobot/ROS_simple
* First commit frontend graph with D3 JS
* MVP blocky, Python code gen
* Add template
* Rename code
* first steps with  blocky
* First commit: boostrap template + graph visualization
* Initial commit
* Contributors: Alejandro Hernández Cordero, Andriy Petlovanyy, Kirsty Ellis, Marc Hanheide, Nestor94Gonzalez, Nick Medveditskov, Sammy Pfeiffer, Ugo Cupcic, Víctor Mayoral Vilches, Your Name, ahcorde, imuguruza, kirstyellis, lucasw, nickolaim@live.com, root
