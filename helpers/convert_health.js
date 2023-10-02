const fs = require('fs')

fs.readFile('health_data_11_uf.json', {encoding: 'utf-8'}, function(err, data){
    if (!err) {
        const content = JSON.parse(data)
        let inserts = ''
        content.map((c) => {
            inserts += `INSERT INTO health_general_data VALUES (
                '${c.indicator}',
                '${c.territorial_level}',
                '${c.territorial_coverage}',
                '${c.opening_indicator_1}',
                '${c.opening_category_1}',
                '${c.opening_indicator_2}',
                '${c.opening_category_2}',
                '${c.four_months_ago}',
                '${c.three_months_ago}',
                '${c.two_months_ago}',
                '${c.a_month_ago}',
                '${c.current_month}',
                '2020-11-01'
            );`
        })
        fs.writeFileSync('insert.sql', inserts)
    } else {
        console.log(err);
    }
});