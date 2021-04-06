let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.postCss('resources/assets/css/style.css', 'style.css')

mix.options({
    postCss: [
        require("postcss-import"),
        require('postcss-nested'),
        require('autoprefixer'),
        require('tailwindcss'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ]
});

/*
 |--------------------------------------------------------------------------
 | DO NOT EDIT BELOW
 |--------------------------------------------------------------------------
 */
mix.setPublicPath('public');
mix.setResourceRoot('./');
