Vagrant.configure("2") do |config|
    config.vm.provider "virtualbox"

    config.vm.box = "vision_development"
    config.vm.box_url = "http://vision:ViSiOn@www.myserver.tld/vision/package.box"

    config.vm.network :private_network, ip: "192.168.88.88"
    config.vm.network :forwarded_port, guest: 80, host: 9002

    config.vm.provider :virtualbox do |v|
        v.name = "vision_development"
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.customize ["modifyvm", :id, "--memory", 1024]
    end

    nfs_setting = RUBY_PLATFORM =~ /darwin/ || RUBY_PLATFORM =~ /linux/

    config.vm.synced_folder ".", "/home/vision/www", id: "vagrant-root" , :nfs => nfs_setting
    config.vm.provision "shell", path: "./provision.sh"

end
