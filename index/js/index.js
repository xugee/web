(function() {


	var Init = {

		init: function() {
			this.Click();
			this.setHtml();
			this.page1_click();
		},
		setHtml: function() {
			setTimeout(function() {
				var htmlElm = $('html'),
					width = $(window).width(),
					fontSize = width * 20 / 1024;
				if (fontSize >= 30) {
					fontSize = 30;
				};
				$('html').css({
					fontSize: fontSize + 'px'
				});
				$(window).on('resize', function() {
					var width = $(window).width(),
						fontSize = width * 20 / 1024;
					if (fontSize >= 30) {
						fontSize = 30;
					};
					$('html').css({
						fontSize: fontSize + 'px'
					});
				});
			}, 300);
		},
		Click: function() {
			var isclick = false;
			$("#container,#index").touch(".back", function(e) {
				var data = $(this).attr("data");
				var x;
				if (data * 1 == 0) {
					location.href = "index.html";
				}
				if (data * 1 == 1) {
					$('.back').attr("data", "0");
					$('.right_button').hide();
					$(".red").html("1");
					$("ul").css("left", "0");
					x = "<div class='head_content'>INTERACT2：早期强化降压显著改善ICH生存者功能恢复<span class='shuzi'>1</span></div>";
					$('.head').html(x);
					$('.list').removeClass('yellow');
					$('.ans').hide();
					$('.page1_shu').removeClass('active');
				}
				if (data * 1 == 3) {
					$('.back').attr("data", "1");
					$('.right_button').hide();
					$(".red").html("3");
					$("ul").css("left", "-88.25rem");
					x = "<div class='head_content'>INTERACT2：急性ICH的最佳达成收缩压？</div>";
					$('.head').html(x);
					$('.page1_3_ans').removeClass('page1_3_ans2');
					$('.page1_4').removeClass('active');
				}
				if (data * 1 == 5) {
					$('.back').attr("data", "3");
					$('.right_button').hide();
					$('.left_button').hide();
					$(".red").html("5");
					$("ul").css("left", "-176.5rem");
					x = "<div class='head_content'>请问INTERACT2研究中的药物应用最广泛的静脉降压药物是？</div>";
					$('.head').html(x);
					
				}
				if (data * 1 == 7) {
					$('.back').attr("data", "5");
					$('.right_button').hide();
					$('.left_button').hide();
					$(".red").html("7");
					$("ul").css("left", "-264.75rem");
					x = "<div class='head_content'>亚宁定成为您首选的静脉降压药物，您考虑的因素有哪些？（多选）</div>";
					$('.head').html(x);
					$('.list').removeClass('yellow');
					$(".ans4").hide();
					$('.page2_2').removeClass('active');
					$('.page2_6').removeClass('active');
					$('.page2_4').removeClass('active');
				}

			}, true);
			$(".bottom").touch(".reference", function(e) {
				$('#index').css("margin-left", "-2000px");
				$("#container").css("margin-right", "0");
				$('.back').attr("data", "0");
				$('.back').show();
				$('.right_button').hide();
				$('.left_button').hide();
				$(".red").html("15");
				$("ul").css("left", "-617.75rem");
				x = "<div class='head_content'>参考资料</div>";
				$('.head').html(x);
			}, true);
			$(".bottom").touch(".prescription", function(e) {
				$('#index').css("margin-left", "-2000px");
				$("#container").css("margin-right", "0");
				$('.back').attr("data", "0");
				$('.back').show();
				$('.right_button').hide();
				$('.left_button').hide();
				$(".red").html("14");
				$("ul").css("left", "-573.625rem");
				x = "<div class='head_content'>简明处方资料</div>";
				$('.head').html(x);
			}, true);
			$("#index").touch(".index_head", function(e) {
				$(this).addClass('yellow');
				$('#index').css("margin-left", "-2000px");
				$("#container").css("margin-right", "0");
				$('.back').attr("data", "0");
				$('.back').show();
				$('.right_button').hide();
				$('.left_button').hide();
				$(".red").html("16");
				$("ul").css("left", "-661.875rem");
				x = "<div class='head_content'>血压管理 非宁莫属</div>";
				$('.head').html(x);
			}, true);
			$("#index").touch(".imgclick", function(e) {
				$('#index').css("margin-left", "-2000px");
				$("#container").css("margin-right", "0");
			}, true);
			$("#container").on("click", ".right_button", function() {
				var red = $(".red").html(),
					red_1 = red * 1 + 1,
					width = 44.125;
				if (red * 1 == 16) {
					return
				};
				$(".red").html(red_1);
				if (red_1 == 16) {
					$(this).hide();
				};
				if (red_1 > 1) {
					$(".left_button").show();
				};
				$("ul").css("left", width * red * -1 + "rem");
				switch (red_1) {
					case 1:
						x = "<div class='head_content'>INTERACT2：早期强化降压显著改善ICH生存者功能恢复<span class='shuzi'>1</span></div>";
						$('.page1_shu').addClass('active');
						break;
					case 2:
						x = "<div class='head_content'>INTERACT2：早期强化降压显著改善ICH生存者功能恢复<span class='shuzi'>1</span></div>";
						$('.page1_shu').addClass('active');
						$('.left_button').hide();
						$('.right_button').show();
						break;
					case 3:
						x = "<div class='head_content'>INTERACT2：急性ICH的最佳达成收缩压？</div>";
						$('.left_button').hide();
						$('.right_button').hide();
						$('.back').attr("data", "1");
						$('.back').show();
						$('.page1_3_ans').removeClass('page1_3_ans2');
						$('.page1_4').removeClass('active');
						break;
					case 4:
						x = "<div class='head_content'>INTERACT2：急性ICH的最佳达成收缩压为<span id='attr'>130-139mmHg</span><span class='shuzi'>3</span></div>";
						$('.page1_4').addClass('active');
						$('.page1_shu').addClass('active');
						$('.right_button').show();
						$('.back').hide();
						setTimeout(function(){
							$('#attr').addClass('yellow');
						}, 3500);
						break;
					case 5:
						x = "<div class='head_content'>请问INTERACT2研究中的药物应用最广泛的静脉降压药物是？</div>";
						$('.back').show();
						$('.left_button').hide();
						$('.right_button').hide();
						$('.back').attr("data", "3");
						$('.page1_5').removeClass('active');
						$('.page1_4').removeClass('active');
						break;
					case 6:
						x = "<div class='head_content'>INTERACT2：亚宁定<span class='circle'>R</span>是应用最广泛的静脉降压药物<span class='shuzi'>4</span></div>";
						$('.right_button').show();
						$('.page1_5').addClass('active');
						$('.back').hide();
						break;
					case 7:
						x = "<div class='head_content'>亚宁定成为您首选的静脉降压药物，您考虑的因素有哪些？（多选）</div>";
						$('.left_button').hide();
						$('.right_button').hide();
						$('.back').show();
						$('.back').attr("data", "5");
						$('.list').removeClass('yellow');
						$('.page2_5').removeClass('active');
						$('.img_page2').removeClass('active');
						$('.page1_5').removeClass('active');
						break;
					case 8:
						x = "<div class='head_content'>亚宁定<span class='circle'>R</span>中枢、外周双重降压<span class='shuzi'>4</span></div>";
						$('.back').hide();
						$('.ans2').hide();
						$('.right_button').hide();
						$('.list').removeClass('yellow');
						$('.page2_2').removeClass('active');
						$('.img_page2').addClass('active');
						break;
					case 9:
						x = "<div class='head_content'>亚宁定<span class='circle'>R</span><span class='yellow'>半分钟</span>内起效<span class='shuzi'>5</span></div>";
						$('.back').show();
						$('.right_button').hide();
						$('.back').attr("data", "7");
						$('.page2_2').addClass('active');
						$('.page2_3').removeClass('active');
						$('.img_page2').removeClass('active');
						break;
					case 10:
						x = "<div class='head_content'>亚宁定<span class='circle'>R</span>平稳降压，更少血压反跳，减少血压变异性<span class='shuzi'>6</span></div>";
						$('.back').attr("data", "7");
						$('.back').hide();
						$('.right_button').show();
						$('.page2_4').removeClass('active');
						break;
					case 11:
						x = "<div class='head_content2'>INTERACT2：收缩压变异性是ICH患者预后不良的预测因素，持续平稳降压，患者获益良多<span class='shuzi'>7</span></div>";
						$('.back').show();
						$('.right_button').hide();
						$('.left_button').show();
						$('.page2_3').removeClass('active');
						$('.page2_4').addClass('active');
						break;
					case 12:
						x = "<div class='head_content'>亚宁定：<span class='circle'>R</span>不影响心率、颅内压<span class='shuzi'></span></div>";
						$('.back').attr("data", "7");
						$('.back').hide();
						$('.right_button').show();
						$('.page2_6').removeClass('active');
						$('.page2_5').addClass('active');
						break;
					case 13:
						x = "<div class='head_content'>亚宁定：<span class='circle'>R</span>快速有效降压、且不影响颅内压<span class='shuzi'>10</span></div>";
						$('.back').show();
						$('.right_button').hide();
						$('.left_button').show();
						$('.page2_6').addClass('active');
						$('.page2_5').removeClass('active');
						break;
					case 14:
						x = "<div class='head_content'>简明处方资料</div>";
						break;
					case 15:
						x = "<div class='head_content'>参考资料</div>";
						break;
					case 16:
						x = "<div class='head_content'>血压管理 非宁莫属</div>";
						break;
				}
				$('.head').html(x);
			}, true);
			$("#container").touch(".left_button", function() {
				var red = $(".red").html(),
					red_1 = red * 1 - 1,
					red_2 = red * 1 - 2,
					width = 44.125;
				var x;
				if (red * 1 == 1) {
					return
				};
				$(".red").html(red_1);
				if (red_1 < 16) {
					$(".right_button").show();
				};
				red_1 == 1 && $(this).hide();
				if (red_1 == 9) {
					red_1 = red_1 - 2;
					$(".red").html(red_1);
					$("ul").css("left", "-264.75rem");
				} else if (red_1 == 11) {
					red_1 = red_1 - 4;
					$(".red").html(red_1);
					$("ul").css("left", "-264.75rem");
				} else {
					$("ul").css("left", width * red_2 * -1 + "rem");
				};
				switch (red_1) {
					case 1:
						x = "<div class='head_content'>INTERACT2：早期强化降压显著改善ICH生存者功能恢复<span class='shuzi'>1</span></div>";
						break;
					case 2:
						x = "<div class='head_content'>INTERACT2：早期强化降压显著改善ICH生存者功能恢复<span class='shuzi'>1</span></div>";
						$('.page1_shu').addClass('active');
						$('.left_button').hide();
						$('.right_button').show();
						break;
					case 3:
						x = "<div class='head_content'>INTERACT2：急性ICH的最佳达成收缩压？</div>";
						$('.left_button').hide();
						$('.right_button').hide();
						$('.back').attr("data", "1");
						$('.page1_3_ans').removeClass('page1_3_ans2');
						$('.page1_4').removeClass('active');
						$('.back').show();
						break;
					case 4:
						x = "<div class='head_content'>INTERACT2：急性ICH的最佳达成收缩压为<span id='attr'>130-139mmHg</span><span class='shuzi'>3</span></div>";
						$('.page1_4').addClass('active');
						$('.right_button').show();
						$('.back').hide();
						setTimeout(function(){
							$('#attr').addClass('yellow');
						}, 3500);
						
						break;
					case 5:
						x = "<div class='head_content'>请问INTERACT2研究中的药物应用最广泛的静脉降压药物是？</div>";
						$('.page1_4').removeClass('active');
						$('.back').show();
						$('.left_button').hide();
						$('.right_button').hide();
						$('.back').attr("data", "3");
						$('.page1_5').removeClass('active');
						break;
					case 6:
						x = "<div class='head_content'>INTERACT2：亚宁定<span class='circle'>R</span>是应用最广泛的静脉降压药物<span class='shuzi'>4</span></div>";
						$('.right_button').show();
						$('.back').hide();
						$('.page1_5').addClass('active');
						break;
					case 7:
						x = "<div class='head_content'>亚宁定成为您首选的静脉降压药物，您考虑的因素有哪些？（多选）</div>";
						$('.left_button').hide();
						$('.right_button').hide();
						$('.back').show();
						$('.back').attr("data", "5");
						$('.list').removeClass('yellow');
						$(".ans4").hide();
						$('.page2_5').removeClass('active');
						$('.img_page2').removeClass('active');
						$('.page1_5').removeClass('active');
						break;
					case 8:
						x = "<div class='head_content'>亚宁定<span class='circle'>R</span>中枢、外周双重降压<span class='shuzi'>4</span></div>";
						$('.back').hide();
						$('.ans2').hide();
						$('.right_button').hide();
						$('.list').removeClass('yellow');
						$('.page2_2').removeClass('active');
						$('.img_page2').addClass('active');
						break;
					case 9:
						x = "<div class='head_content'>亚宁定<span class='circle'>R</span><span class='yellow'>半分钟</span>内起效<span class='shuzi'>5</span></div>";
						$('.back').show();
						$('.right_button').hide();
						$('.back').attr("data", "7");
						$('.page2_2').addClass('active');
						$('.page2_3').removeClass('active');
						$('.img_page2').removeClass('active');
						break;
					case 10:
						x = "<div class='head_content'>亚宁定<span class='circle'>R</span>平稳降压，更少血压反跳，减少血压变异性<span class='shuzi'>6</span></div>";
						$('.back').attr("data", "7");
						$('.back').hide();
						$('.right_button').show();
						$('.page2_3').addClass('active');
						$('.page2_4').removeClass('active');
						console.log(123);
						break;
					case 11:
						x = "<div class='head_content2'>INTERACT2：收缩压变异性是ICH患者预后不良的预测因素，持续平稳降压，患者获益良多<span class='shuzi'>7</span></div>";
						$('.back').show();
						$('.right_button').hide();
						$('.left_button').show();
						$('.page2_3').removeClass('active');
						$('.page2_4').addClass('active');
						break;
					case 12:
						x = "<div class='head_content'>亚宁定：<span class='circle'>R</span>不影响心率、颅内压<span class='shuzi'></span></div>";
						$('.back').attr("data", "7");
						$('.back').hide();
						$('.right_button').show();
						$('.page2_6').removeClass('active');
						$('.page2_5').addClass('active');
						break;
					case 13:
						x = "<div class='head_content'>亚宁定：<span class='circle'>R</span>快速有效降压、且不影响颅内压<span class='shuzi'>10</span></div>";
						$('.back').show();
						$('.right_button').hide();
						$('.left_button').show();
						$('.page2_6').addClass('active');
						$('.page2_5').removeClass('active');
						break;
					case 14:
						x = "<div class='head_content'>简明处方资料</div>";
						break;
					case 15:
						x = "<div class='head_content'>参考资料</div>";
						break;
					case 16:
						x = "<div class='head_content'>血压管理 非宁莫属</div>";
						break;
				}
				$('.head').html(x);
			}, true);
			//向左滑动
			(function() {
				var el = document.querySelector('#index');
				var startPosition, endPosition, deltaX, deltaY, moveLength;

				el.addEventListener('touchstart', function(e) {
					var touch = e.changedTouches[0];
					startPosition = {
						x: touch.pageX,
						y: touch.pageY,
						startdate: Date.now()
					}
				});

				el.addEventListener('touchend', function(e) {
					var touch = e.changedTouches[0];
					endPosition = {
						x: touch.pageX,
						y: touch.pageY,
						enddate: Date.now()
					}

					deltaX = startPosition.x - endPosition.x;
					deltaY = endPosition.y - startPosition.y;
					date = endPosition.enddate - startPosition.startdate;
					moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
					console.log(deltaX);
					console.log(date);
					if (deltaX >= 30 && Math.abs(deltaY) <= 75 && date <= 1000) {
						console.log("swipeLeft");
						$('#index').css("margin-left", "-2000px");
						$("#container").css("margin-right", "0");
					};
				});
			})();
		},
		page1_click: function() {
			var isclick = false;
			$("#container").on("click", ".listclick", function(e) {
				if (!isclick) {
					isclick = true;
					$('.listclick').removeClass('yellow');
					$(this).addClass('yellow');
					var ans = $(this).attr('data');
					$('.ans').show();
					if (ans * 1 == 0) {
						$('.ans').html('是不是有点低呢？');
						setTimeout(function() {
							$(".right_button").trigger('click');
						}, 1000);
					}
					if (ans * 1 == 1) {
						$('.ans').html('恭喜您，答对了！');
						setTimeout(function() {
							$(".right_button").trigger('click');
						}, 1000);
					}
					if (ans * 1 == 2) {
						$('.ans').html('是不是有点高？');
						setTimeout(function() {
							$(".right_button").trigger('click');
						}, 1000);
					}
					if (ans * 1 == 3) {
						$('.ans3').show();
						$('.ans3').html('恭喜您，INTERACT2研究中的药物应用是一致的。');
						setTimeout(function() {
							$(".right_button").trigger('click');
						}, 1000);
					}
					if (ans * 1 == 4) {
						$('.ans3').show();
						$('.ans3').html('很遗憾，您和大家的选择有点不太一样哦！<span class="icon"></span>');
					}
					if (ans * 1 == 5) {
						$('.ans3').show();
						$('.ans3').html('很遗憾，您和大家的选择有点不太一样哦！<span class="icon"></span>');
					}
					if (ans * 1 == 6) {
						$('.ans3').show();
						$('.ans3').html('很遗憾，您和大家的选择有点不太一样哦！<span class="icon"></span>');
					}
					if (ans * 1 == 7) {
						setTimeout(function() {
							$(".right_button").trigger('click');
						}, 1000);
					}
					if (ans * 1 == 8) {
						$(".red").html("10");
						$('.page2_3').removeClass('active');
						setTimeout(function() {
							$("ul").css("left", "-397.125rem");
							x = "<div class='head_content'>亚宁定<span class='circle'>R</span>平稳降压，更少血压反跳，减少血压变异性<span class='shuzi'>6</span></div>";
							$('.head').html(x);
							$('.back').hide();
							$('.back').attr("data", "7");
							$('.right_button').show();
							$('.left_button').show();
							$('.page2_3').addClass('active');
						}, 1000);
					}
					if (ans * 1 == 9) {
						$(".red").html("12");
						setTimeout(function() {
							$("ul").css("left", "-485.375rem");
							x = "<div class='head_content'>亚宁定：<span class='circle'>R</span>不影响心率、颅内压<span class='shuzi'></span></div>";
							$('.head').html(x);
							$('.back').hide();
							$('.back').attr("data", "7");
							$('.right_button').show();
							$('.left_button').show();
							$('.page2_5').addClass('active');
						}, 1000);
					}
					if (ans * 1 == 10) {
						$(".ans4").show();
					}
					if (ans * 1 == 11) {
						$('.ans2').show();
						$('.ans2').html('恭喜您，答对了！');
						setTimeout(function() {
							$(".right_button").trigger('click');
						}, 1000);
					}
					if (ans * 1 == 12) {
						$('.ans2').show();
						$('.ans2').html('很遗憾，您答错了，亚宁定<span class="circle2">R</span>选择性结合α1受体<span class="icon"></span>');
					}
					if (ans * 1 == 13) {
						$('.ans2').show();
						$('.ans2').html('很遗憾，您答错了，亚宁定<span class="circle2">R</span>选择性结合α1受体<span class="icon"></span>');
					}
					if (ans * 1 == 14) {
						$('.ans2').show();
						$('.ans2').html('很遗憾，您答错了，亚宁定<span class="circle2">R</span>选择性结合α1受体<span class="icon"></span>');
					}
				}
				setTimeout(function() {
					isclick = false;
				}, 2000);
			}, true);
			$("#container").on("click", ".page1_3_ans", function(e) {
				if (!isclick) {
					isclick = true;
					var data = $(this).attr('data');
					$(this).addClass('page1_3_ans2');
					setTimeout(function() {
						$(".right_button").trigger('click');
					}, 1000);
					if (data * 1) {
						$(".right_button").show();
					};
				}
				setTimeout(function() {
					isclick = false;
				}, 2000);
			}, true);
			$("#container").on("click", ".page1_3_ans_2", function(e) {
				var data = $(this).attr('data');
				$(this).addClass('page1_3_ans2_2');
				if (data * 1) {
					$(".right_button").show();
				};
			}, true);
			$("#container").touch(".icon", function() {
				$(this).parent().hide();
				$('.list').removeClass('yellow');
			}, true);
			// $(".listclick").trigger('click');
			// $(".right_button").trigger('click');
		}
	};
	Init.init();
})();