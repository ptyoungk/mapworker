<?php
	require_once './db/dbmapworker_dbManager.php';
	
/*
 * SCHEMA DB map_dteail
 * 
	{
		bas_file: {
			type: 'String'
		},
		bas_map: {
			type: 'String'
		},
		in_user: {
			type: 'String'
		},
		map_add1: {
			type: 'String'
		},
		map_add2: {
			type: 'String'
		},
		map_add3: {
			type: 'String'
		},
		map_box: {
			type: 'String'
		},
		map_line: {
			type: 'String'
		},
		map_name: {
			type: 'String'
		},
		map_txt: {
			type: 'String'
		},
		map_type: {
			type: 'String'
		},
		mapid: {
			type: 'String'
		},
		update_date: {
			type: 'String'
		},
		update_res: {
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


$app->post('/map_dteail',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'bas_file'	=> isset($body->bas_file)?$body->bas_file:'',
		'bas_map'	=> isset($body->bas_map)?$body->bas_map:'',
		'in_user'	=> isset($body->in_user)?$body->in_user:'',
		'map_add1'	=> isset($body->map_add1)?$body->map_add1:'',
		'map_add2'	=> isset($body->map_add2)?$body->map_add2:'',
		'map_add3'	=> isset($body->map_add3)?$body->map_add3:'',
		'map_box'	=> isset($body->map_box)?$body->map_box:'',
		'map_line'	=> isset($body->map_line)?$body->map_line:'',
		'map_name'	=> isset($body->map_name)?$body->map_name:'',
		'map_txt'	=> isset($body->map_txt)?$body->map_txt:'',
		'map_type'	=> isset($body->map_type)?$body->map_type:'',
		'mapid'	=> isset($body->mapid)?$body->mapid:'',
		'update_date'	=> isset($body->update_date)?$body->update_date:'',
		'update_res'	=> isset($body->update_res)?$body->update_res:'',
		
	);

	$obj = makeQuery("INSERT INTO map_dteail (_id, bas_file, bas_map, in_user, map_add1, map_add2, map_add3, map_box, map_line, map_name, map_txt, map_type, mapid, update_date, update_res )  VALUES ( null, :bas_file, :bas_map, :in_user, :map_add1, :map_add2, :map_add3, :map_box, :map_line, :map_name, :map_txt, :map_type, :mapid, :update_date, :update_res   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/map_dteail/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM map_dteail WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/map_dteail/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM map_dteail WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/map_dteail',	function () use ($app){
	makeQuery("SELECT * FROM map_dteail");
});


//CRUD - EDIT

$app->post('/map_dteail/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'bas_file'	    => isset($body->bas_file)?$body->bas_file:'',
		'bas_map'	    => isset($body->bas_map)?$body->bas_map:'',
		'in_user'	    => isset($body->in_user)?$body->in_user:'',
		'map_add1'	    => isset($body->map_add1)?$body->map_add1:'',
		'map_add2'	    => isset($body->map_add2)?$body->map_add2:'',
		'map_add3'	    => isset($body->map_add3)?$body->map_add3:'',
		'map_box'	    => isset($body->map_box)?$body->map_box:'',
		'map_line'	    => isset($body->map_line)?$body->map_line:'',
		'map_name'	    => isset($body->map_name)?$body->map_name:'',
		'map_txt'	    => isset($body->map_txt)?$body->map_txt:'',
		'map_type'	    => isset($body->map_type)?$body->map_type:'',
		'mapid'	    => isset($body->mapid)?$body->mapid:'',
		'update_date'	    => isset($body->update_date)?$body->update_date:'',
		'update_res'	    => isset($body->update_res)?$body->update_res:''
	);

	$obj = makeQuery("UPDATE map_dteail SET  bas_file = :bas_file,  bas_map = :bas_map,  in_user = :in_user,  map_add1 = :map_add1,  map_add2 = :map_add2,  map_add3 = :map_add3,  map_box = :map_box,  map_line = :map_line,  map_name = :map_name,  map_txt = :map_txt,  map_type = :map_type,  mapid = :mapid,  update_date = :update_date,  update_res = :update_res   WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>