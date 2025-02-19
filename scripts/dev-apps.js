const {execSync} = require('child_process');

const devApp = process.argv[2];

const sequentialExecution = async (...commands) => {
  if (commands.length === 0) {
    return 0;
  }

  execSync(commands.shift(), {stdio: 'inherit'}); #inheritooor

  return sequentialExecution(...commands);
};

sequentialExecution(
  `pnpm turbo run build --filter=@${devApp}^...`, #build run
  `pnpm turbo run dev --filter=@${devApp}`
);
