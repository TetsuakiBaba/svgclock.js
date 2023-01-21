function createSVGClock(dom, option = {}) {
    let element = document.querySelector(dom);
    let fontsize = window.getComputedStyle(element).getPropertyValue('font-size');
    fontsize = parseInt(fontsize);
    if (typeof option.hour === 'undefined') option.hour = 10;
    if (typeof option.minute === 'undefined') option.minute = 10;
    if (typeof option.size === 'undefined') option.size = fontsize;
    if (typeof option.color === 'undefined') option.color = '#777777';
    console.log(option);
    let svg_width = option.size;
    let svg_height = option.size;
    let line_width = svg_width * 0.1;
    let h_length = svg_width * 0.18;
    let m_length = svg_width * 0.27;
    let h = option.hour;
    let m = option.minute;
    let clock = {
        h: {
            x: h_length * Math.cos(2 * Math.PI * (((h - 3) % 12) / 12)),
            y: h_length * Math.sin(2 * Math.PI * (((h - 3) % 12) / 12))
        },
        m: {
            x: m_length * Math.cos(2 * Math.PI * (((m - 15) % 60) / 60)),
            y: m_length * Math.sin(2 * Math.PI * (((m - 15) % 60) / 60))
        }
    }

    var draw = SVG().addTo(dom).size(svg_width, svg_height)
    var rect = draw.ellipse(svg_width * 0.8, 0.8 * svg_height).fill('none').stroke({ color: option.color, width: line_width }).move(svg_width * 0.1, svg_height * 0.1);
    var line = draw.line(
        svg_width / 2,
        svg_height / 2,
        svg_width / 2 + clock.h.x,
        svg_height / 2 + clock.h.y)
    line.stroke({ color: option.color, width: line_width, linecap: 'round' });
    var line = draw.line(
        svg_width / 2,
        svg_height / 2,
        svg_width / 2 + clock.m.x,
        svg_height / 2 + clock.m.y)
    line.stroke({ color: option.color, width: line_width, linecap: 'round' });
}

// 