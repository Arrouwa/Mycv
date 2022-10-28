(function ($) {
    'use strict';

    $(function () {
        var $body = $('body');

        $body.on('click', '.setting-box .open-close-ear', function () {
            $(this).parent().toggleClass('open');
        });

        $body.on('click', '.setting-box .theme-choose-list-container ul li', function () {
            var theme = $(this).data('theme');

            $('.setting-box .theme-choose-list-container ul li').removeClass('active');
            $(this).addClass('active');

            $body.removeClass(function (index, className) {
                return (className.match(/(^|\s)theme-\S+/g) || []).join(' ');
            });

            if (theme !== undefined && theme !== 'default') {
                $body.addClass('theme-' + theme);
            }
        });

        $body.on('click', '.setting-box .color-choose-list-container ul li', function () {
            var color = $(this).data('color');

            $('.setting-box .color-choose-list-container ul li').removeClass('active');
            $(this).addClass('active');

            $body.removeClass(function (index, className) {
                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            if (color !== undefined && color !== 'default') {
                $body.addClass('color-' + color);
            }
        });

        $body.on('click', '.setting-box .options-list-container input[type="checkbox"]', function () {
            var $this = $(this);
            var type = $this.data('type');

            if (type === 'left_menu_expand') {
                if ($this.prop('checked')) {
                    $.sp.leftSidebar.expand();
                } else {
                    $.sp.leftSidebar.collapse();
                }
            }
        });

        function initSettingToolbox() {
            var $settingBoxHtml =
                '<div class="setting-box">' +
                '        <div class="open-close-ear">' +
                '            <i class="la la-gear la-spin"></i>' +
                '        </div>' +
                '        <div class="label">SKINS</div>' +
                '        <div class="theme-choose-list-container">' +
                '            <ul>' +
                '                <li data-theme="light" class="active">' +
                '                    <div class="light"></div>' +
                '                    <span>Light</span>' +
                '                </li>' +
                '                <li data-theme="dark">' +
                '                    <div class="dark"></div>' +
                '                    <span>Dark</span>' +
                '                </li>' +
                '            </ul>' +
                '        </div>' +
                '        <div class="label">COLORS</div>' +
                '        <div class="color-choose-list-container">' +
                '            <ul>' +
                '                <li data-color="blue" class="active">' +
                '                    <div class="blue"></div>' +
                '                    <span>Blue</span>' +
                '                </li>' +
                '                <li data-color="red">' +
                '                    <div class="red"></div>' +
                '                    <span>Red</span>' +
                '                </li>' +
                '                <li data-color="yellow">' +
                '                    <div class="yellow"></div>' +
                '                    <span>Yellow</span>' +
                '                </li>' +
                '                <li data-color="green">' +
                '                    <div class="green"></div>' +
                '                    <span>Green</span>' +
                '                </li>' +
                '                <li data-color="purple">' +
                '                    <div class="purple"></div>' +
                '                    <span>Purple</span>' +
                '                </li>' +
                '            </ul>' +
                '        </div>' +
                '        <div class="label hide-on-mobile">OPTION</div>' +
                '        <div class="options-list-container hide-on-mobile">' +
                '            <ul>' +
                '                <li>' +
                '                    <label>' +
                '                       <span>Expand Menu</span>' +
                '                       <input type="checkbox" data-type="left_menu_expand"/>' +
                '                   </label>' +
                '                </li>' +
                '            </ul>' +
                '        </div>' +
                '        <div class="label">BACKGROUND DEMOS</div>' +
                '        <div class="bg-choose-list-container">' +
                '            <ul>' +
                '                <li>' +
                '                    <a href="index.html">BG Image</a>' +
                '                </li>' +
                '                <li>' +
                '                    <a href="bg-video.html">BG Video</a>' +
                '                </li>' +
                '                <li>' +
                '                    <a href="bg-color.html">BG Color</a>' +
                '                </li>' +
                '                <li>' +
                '                    <a href="bg-particles.html">BG Particles</a>' +
                '                </li>' +
                '            </ul>' +
                '        </div>' +
                '    </div>';

            $body.append($settingBoxHtml);
        }
        initSettingToolbox();
    });
}(jQuery));