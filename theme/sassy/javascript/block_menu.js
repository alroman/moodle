
YUI().use('anim', function(Y) {
    
    var toggle_button = Y.one('.pagelayout-report .left-block-toggle .btn-toggle');
    
    if (toggle_button) {
        
        toggle_button.on('click', function(e) {
        
            
            var anim_open = new Y.Anim({
                node: '#page',
                to: {
                    right: -200
                },
                easing: 'backIn'
            });
            
            var anim_close = new Y.Anim({
                node: '#page',
                to: {
                    right: 0
                },
                easing: 'backOut'
            });

            if (toggle_button.hasClass('btn-toggle-left')) {
                anim_close.run();
            } else {
                anim_open.run();
            }
            
            toggle_button.toggleClass('btn-toggle-left');
        })
    }
    
})

