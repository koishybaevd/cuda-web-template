$(document).ready(function() {
    $('button[filter]').click(function() {
        if($(this).attr('val') == 'off') {            
            $('.filter > div').hide();
            $('div[filter='+$(this).attr('filter')+']').show(300);
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('button[filter]').removeClass('focused');
            $(this).addClass('focused');         
            if($(this).attr('filter') == 'all') {
                $('.filter > div').show(300);
            }
        }
    });

    let charts = [
        {
            id: 'chart-1',
            data: [90, 10],
            colors: ['#30bae7', '#f5f5f5']
        },
        {
            id: 'chart-2',
            data: [75, 25],
            colors: ['#d74680', '#f5f5f5']
        },
        {
            id: 'chart-3',
            data: [70, 30],
            colors: ['#15c7a8', '#f5f5f5']
        },
        {
            id: 'chart-4',
            data: [85, 15],
            colors: ['#eb7d4b', '#f5f5f5']
        }
    ];
    
    charts.forEach(function(chart) {
        new Chart(document.getElementById(chart.id).getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: chart.data,
                        backgroundColor: chart.colors
                    }
                ]
            },
            options: {
                cutoutPercentage: 70
            }
        });
    });
});