<script>
	import logo from '../lib/assets/logo.svg';
	import { userScore } from '../components/Store';
</script>

<header>
	<div class="contour_header">
		<div class="logo_header">
			<img src={logo} alt="logo" />
		</div>
		<div class="score_header">
			<div class="score">SCORE</div>
			<div class="result">{ $userScore }</div>
		</div>
	</div>
</header>

<style>
	header {
		padding-top: 60px;
		display: flex;
		margin-right: auto;
		margin-left: auto;
		width: 50%;
		color: black
	}
	.contour_header {
		border-radius: 20px;
		border: solid 2px white;
		padding: 10px;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
	}

	.score_header {
		background-color: white;
		border-radius: 20px;
		width: 120px;
		padding: 15px;
		text-align: center;
	}

	.result {
		font-size: 40px;
		font-weight: bolder;
	}
</style>
