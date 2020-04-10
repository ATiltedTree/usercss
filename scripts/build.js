const sass = require('node-sass');
const fs = require('fs');

const builds = ['github-wide', 'archlinux-dark'];

for (let i = 0; i < builds.length; i++) {
  const element = builds[i];
  const result = sass.renderSync({
    file: `src/${element}.user.scss`,
    outFile: `${element}.user.css`,
    outputStyle: 'expanded',
  });
  fs.writeFileSync(`${element}.user.css`, result.css);
  console.log(`Built ${element} in ${Math.floor(result.stats.duration / 1000)}s`);
}
