var ids = {'created_by': 'user',
           'equipment': 'equipment',
           'material': 'material',
           'fluid_type': 'fluidtype',
           'lab': 'lab',
           'recommendation': 'recommendation'
           };

function add_listener(key) {
    document.getElementById("btn_" + key).addEventListener("click", function(){
         window.open("/admin/" + ids[key], ids[key], "left=200,top=200, width=800, height=400");
    })
};

for (var key in ids) {
    add_listener(key)
};