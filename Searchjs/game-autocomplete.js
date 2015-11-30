$(function(){
  var game = [
    { value: 'Age Of Empire 2', data: 'vga_aoe.html'  },
    { value: 'Assassin Creed IV Black Flag', data: 'vga_ac4bf.html' },
    { value: 'Bejewelled 3', data: 'vga_b3.html' },
    { value: 'Call of Duty Ghosts', data: 'vga_codg.html' },
	{ value: 'Crew ', data: 'vga_crew.html' },
	{ value: 'Destiny  ', data: 'vga_destiny.html' },
	{ value: 'Diablo 3 ', data: 'vga_diablo3.html' },
	{ value: 'Dishonoured ', data: 'vga_dishonored.html' },
	{ value: 'Empire Earth 3 ', data: 'vga_ee3.html' },
	{ value: 'Elder Scroll Skyrim ', data: 'vga_ess.html' },
	{ value: 'Fallout 3 ', data: 'vga_fallout3.html' },
	{ value: 'Farcry 4 ', data: 'vga_farcry4.html' },
	{ value: 'Fifa 15 ', data: 'vga_fifa15.html' },
	{ value: 'Leos Fortune ', data: 'vga_lf.html' },
	{ value: 'Limbo ', data: 'vga_limbo.html' },
	{ value: 'Lost Orbit ', data: 'vga_lo.html' },
	{ value: 'The Last of Us ', data: 'vga_lou.html' },
	{ value: 'Metal Gear Solid Phantom Pain ', data: 'vga_mgs5pp.html' },
	{ value: 'Need For Speed Rivals ', data: 'vga_nfsr.html' },
	{ value: 'Pro Evolution Soccer 16 ', data: 'vga_pes16.html' },
	{ value: 'Portal 2 ', data: 'vga_portal2.html' },
	{ value: 'Shadow Of Mordor ', data: 'vga_som.html' },
	{ value: 'Starcraft 2 ', data: 'vga_starcraft2.html' },
	{ value: 'Tom Clancy Future Soldier ', data: 'vga_tcfs.html' },
	{ value: 'Uncharted 3 ', data: 'vga_uncharted3.html' },
	{ value: 'World Of Goo ', data: 'vga_wog.html' },
	{ value: 'The Witcher 3 ', data: 'vga_witcher3.html' },
	
	

   ];



  // setup autocomplete function pulling from game[] array
  $('#autocomplete').autocomplete({
    lookup: game,
    onSelect: function (suggestion) {
      var thehtml = '<<span style="color: #E8D3D3"><a target="_blank" href= "'
      + suggestion.data + '" >   ' + suggestion.value + '</a></span>';
      $('#outputcontent').html(thehtml);

changeLink()

    }
  });


});

//<strong><span style="color: #E8D3D3">Game:</span></strong><span style="color: #E8D3D3"> ' +  suggestion.value + '</span> <br> 