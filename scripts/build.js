const sass = require('node-sass');
const fs = require('fs');

const builds = ['github-wide', 'archlinux-dark'];

builds.forEach((build) => {
  const result = sass.renderSync({
    file: `src/${build}.user.scss`,
    outFile: `${build}.user.css`,
    outputStyle: 'expanded',
  });
  fs.writeFileSync(`${build}.user.css`, result.css);
  console.log(`Built ${build} in ${result.stats.duration}ms.`);
});
