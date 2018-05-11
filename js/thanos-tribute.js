

$( function(){

    function thanosTribute(){
        var self = this;

        self.container = null;

        self.options = {
            type: 'triangle',
            easing: 'easeOutQuart',
            size: 8,
            particlesAmountCoefficient: 4,
            oscillationCoefficient: 2
            ,direction: 'top'
            ,color: '#333'
            ,duration: 10000
        },

        self.init = function(){
            var bttn = $(".spider-man")[0];
            var particles = new Particles(bttn, self.options);

            setTimeout( function() {
                if ( !particles.isAnimating()){ 
                    particles.disintegrate();
                }
            }, 2000);

        };
        
        return {
            init: function(){
                self.container = $(".thanos-tribute-container");
                self.init();
            }
        }
    };

    window.hmbr.thanosTribute = thanosTribute;

    $(document).ready( function(){
        var thanosTribute = window.hmbr.thanosTribute();
        thanosTribute.init();
    });
});