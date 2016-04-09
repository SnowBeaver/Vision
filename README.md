# Vision


# Installation

Windows
=======

1. Download and install Python from https://www.python.org/downloads/
2. Download and install Vagrant from https://www.vagrantup.com/downloads.html
3. Download and install Git from https://git-scm.com/download/win
4. Download and install VirtualBox from https://www.virtualbox.org/wiki/Downloads
	4.1. Install Pip
		4.1.1 Save https://raw.githubusercontent.com/pypa/pip/master/contrib/get-pip.py on your local machine as get-pip.py
		4.1.2 In cmd go to get-pip.py file and run "python get-pip.py"

	another way to install pip is by executing command from terminal:
	<pre>python -m pip install -U pip</pre>

5. Open windows terminal and cd to your work directory.
6. git clone https://github.com/SnowBeaver/Vision.git project
7. pip install fabric unipath

Note: If you get error: Microsoft Visual C++ 9.0 is required.
Download and install from http://www.microsoft.com/en-us/download/confirmation.aspx?id=44266.

8. git clone https://github.com/SnowBeaver/Vision.git project
9. cd project
10. vagrant up
11. Add this line 192.168.88.88 dev.vision.local" to windows hosts file, which is normally under
%systemroot%\system32\drivers\etc\
12. fab setup_dev --password vagrant
13. Open browser and type in url: http://dev.vision.local

MacOSX
======
1. Install brew
2. brew install
   vagrant
   python
   pip
   fabric
   unipath
3. $ sudo bash
4. $ echo "192.168.88.88 dev.vision.local" >> /etc/hosts
5. $ exit
6. $ cd yourprojectsdir
7. $ mkdir vision && cd vision
8. $ git clone https://github.com/SnowBeaver/Vision.git project
9. $ cd project
10. $ vagrant up
11. fab setup_dev
12. Open browser and type in url: http://dev.vision.local


Ubuntu Linux
============

1. $ sudo apt-get install virtualbox vagrant
2. $ sudo bash
3. $ echo "192.168.88.88 dev.vision.local" >> /etc/hosts
4. $ exit
5. $ cd yourprojectsdir
6. $ mkdir vision && cd vision
7. $ git clone https://github.com/SnowBeaver/Vision.git project
8. $ cd project
9. $ vagrant up
10. Open browser and type in url: http://dev.vision.local

