var reporting_report_to_console = {
    run: function () {
        for (creep in Game.creeps) {
            console.log(
                Game.creeps[creep].name +
                    ' Lifetime: ' +
                    round(Game.creeps[creep].ticksToLive * 2.75) / 60 +
                    '/' +
                    (1500 * 2.75) / 60
            )
        }
    },
}
