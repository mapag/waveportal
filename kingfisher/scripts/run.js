const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();

  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

	let waveCount;
  waveCount = await waveContract.getTotalWaves();

	// simulate owner sending a wave
	let waveTxn = await waveContract.wave("Hola mundo!");
  await waveTxn.wait();

	// simulate random person sending a wave
	waveTxn = await waveContract.connect(randomPerson).wave("probando");
  await waveTxn.wait();

	waveMessage = await waveContract.getMessageAddress(randomPerson.address);
  waveCount   = await waveContract.getTotalWaves();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
