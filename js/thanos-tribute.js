

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
            ,color: '#a71814'
            ,duration: 10000
        },

        self.init = function(){
            var bttn = $(".spider-man")[0];
            var particles = new Particles(bttn, self.options);

            if ( !particles.isAnimating()){ 
                particles.disintegrate();
            }
        };
        
        return {
            init: function(){
                self.container = $(".thanos-tribute-container");
                setTimeout( function() {
                    $(".spider-man").addClass("punch");
                    setTimeout( function() {
                        self.init();
                    }, 1300);
                }, 800);
            }
        }
    };

    window.hmbr.thanosTribute = thanosTribute;

    $(document).ready( function(){
        var thanosTribute = window.hmbr.thanosTribute();
        thanosTribute.init();
    });
});