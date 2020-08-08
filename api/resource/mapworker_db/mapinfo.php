<?php
	require_once './db/dbmapworker_dbManager.php';
	
/*
 * SCHEMA DB mapinfo
 * 
	{
		c_lang: {
			type: 'String'
		},
		c_long: {
			type: 'String'
		},
		cre_date: {
			type: 'Date'
		},
		cre_user: {
			type: 'String'
		},
		e_lang: {
			type: 'String'
		},
		e_long: {
			type: 'String'
		},
		map_base: {
			type: 'String'
		},
		map_bld_co: {
			type: 'String'
		},
		map_dist: {
			type: 'String'
		},
		map_input_date: {
			type: 'Date'
		},
		map_memo: {
			type: 'String'
		},
		map_name: {
			type: 'String'
		},
		map_sppy_user: {
			type: 'String'
		},
		mapid: {
			type: 'String'
		},
		mobile_table: {
			type: 'String'
		},
		s_lang: {
			type: 'String'
		},
		s_long: {
			type: 'String'
		},
		url: {
			type: 'String'
		},
		ver: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		_map_dteail: {
			type: Schema.ObjectId,
			ref : "mapinfo"
		},
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/mapinfo',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'c_lang'	=> isset($body->c_lang)?$body->c_lang:'',
		'c_long'	=> isset($body->c_long)?$body->c_long:'',
		'cre_date'	=> isset($body->cre_date)?$body->cre_date:'',
		'cre_user'	=> isset($body->cre_user)?$body->cre_user:'',
		'e_lang'	=> isset($body->e_lang)?$body->e_lang:'',
		'e_long'	=> isset($body->e_long)?$body->e_long:'',
		'map_base'	=> isset($body->map_base)?$body->map_base:'',
		'map_bld_co'	=> isset($body->map_bld_co)?$body->map_bld_co:'',
		'map_dist'	=> isset($body->map_dist)?$body->map_dist:'',
		'map_input_date'	=> isset($body->map_input_date)?$body->map_input_date:'',
		'map_memo'	=> isset($body->map_memo)?$body->map_memo:'',
		'map_name'	=> isset($body->map_name)?$body->map_name:'',
		'map_sppy_user'	=> isset($body->map_sppy_user)?$body->map_sppy_user:'',
		'mapid'	=> isset($body->mapid)?$body->mapid:'',
		'mobile_table'	=> isset($body->mobile_table)?$body->mobile_table:'',
		's_lang'	=> isset($body->s_lang)?$body->s_lang:'',
		's_long'	=> isset($body->s_long)?$body->s_long:'',
		'url'	=> isset($body->url)?$body->url:'',
		'ver'	=> isset($body->ver)?$body->ver:'',
		
		'_map_dteail' => isset($body->_map_dteail)?$body->_map_dteail:'',
	);

	$obj = makeQuery("INSERT INTO mapinfo (_id, c_lang, c_long, cre_date, cre_user, e_lang, e_long, map_base, map_bld_co, map_dist, map_input_date, map_memo, map_name, map_sppy_user, mapid, mobile_table, s_lang, s_long, url, ver , _map_dteail )  VALUES ( null, :c_lang, :c_long, :cre_date, :cre_user, :e_lang, :e_long, :map_base, :map_bld_co, :map_dist, :map_input_date, :map_memo, :map_name, :map_sppy_user, :mapid, :mobile_table, :s_lang, :s_long, :url, :ver , :_map_dteail   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/mapinfo/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM mapinfo WHERE _id = :id LIMIT 1", $params);

});

//CRUD - FIND BY _map_dteail

$app->get('/mapinfo/findBy_map_dteail/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM mapinfo WHERE _map_dteail = :key", $params);
	
});
	
//CRUD - GET ONE
	
$app->get('/mapinfo/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM mapinfo WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/mapinfo',	function () use ($app){
	makeQuery("SELECT * FROM mapinfo");
});


//CRUD - EDIT

$app->post('/mapinfo/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'c_lang'	    => isset($body->c_lang)?$body->c_lang:'',
		'c_long'	    => isset($body->c_long)?$body->c_long:'',
		'cre_date'	    => isset($body->cre_date)?$body->cre_date:'',
		'cre_user'	    => isset($body->cre_user)?$body->cre_user:'',
		'e_lang'	    => isset($body->e_lang)?$body->e_lang:'',
		'e_long'	    => isset($body->e_long)?$body->e_long:'',
		'map_base'	    => isset($body->map_base)?$body->map_base:'',
		'map_bld_co'	    => isset($body->map_bld_co)?$body->map_bld_co:'',
		'map_dist'	    => isset($body->map_dist)?$body->map_dist:'',
		'map_input_date'	    => isset($body->map_input_date)?$body->map_input_date:'',
		'map_memo'	    => isset($body->map_memo)?$body->map_memo:'',
		'map_name'	    => isset($body->map_name)?$body->map_name:'',
		'map_sppy_user'	    => isset($body->map_sppy_user)?$body->map_sppy_user:'',
		'mapid'	    => isset($body->mapid)?$body->mapid:'',
		'mobile_table'	    => isset($body->mobile_table)?$body->mobile_table:'',
		's_lang'	    => isset($body->s_lang)?$body->s_lang:'',
		's_long'	    => isset($body->s_long)?$body->s_long:'',
		'url'	    => isset($body->url)?$body->url:'',
		'ver'	    => isset($body->ver)?$body->ver:'',
		'_map_dteail'      => isset($body->_map_dteail)?$body->_map_dteail:'' 
	);

	$obj = makeQuery("UPDATE mapinfo SET  c_lang = :c_lang,  c_long = :c_long,  cre_date = :cre_date,  cre_user = :cre_user,  e_lang = :e_lang,  e_long = :e_long,  map_base = :map_base,  map_bld_co = :map_bld_co,  map_dist = :map_dist,  map_input_date = :map_input_date,  map_memo = :map_memo,  map_name = :map_name,  map_sppy_user = :map_sppy_user,  mapid = :mapid,  mobile_table = :mobile_table,  s_lang = :s_lang,  s_long = :s_long,  url = :url,  ver = :ver  , _map_dteail=:_map_dteail  WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>