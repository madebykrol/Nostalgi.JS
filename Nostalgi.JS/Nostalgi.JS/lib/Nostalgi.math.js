NOSTALGI = NOSTALGI || {};

NOSTALGI.Math = NOSTALGI.Math || {};

NOSTALGI.Math.Vector3 = function (x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
};


/**
 * 
 */
NOSTALGI.Math.Matrix4 = function () {
	// Identity
	
	this.m00; this.m01; this.m02; this.m03;
	this.m10; this.m11; this.m12; this.m13;
	this.m20; this.m21; this.m22; this.m23;
	this.m30; this.m31; this.m32; this.m33;
	
	this.loadIdentity = function() {
		this.m01 = 0.0; this.m02 = 0.0; this.m03 = 0.0;
		this.m10 = 0.0; this.m12 = 0.0; this.m13 = 0.0;
		this.m20 = 0.0; this.m21 = 0.0; this.m23 = 0.0;
		this.m30 = 0.0; this.m31 = 0.0; this.m32 = 0.0;
		this.m00 = 1.0; this.m11 = 1.0; this.m22 = 1.0; this.m33 = 1.0;
	}
	
	// Construct a matrix from values.
	this.fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33, m34) {
		this.m00 = m00;
		this.m01 = m01;
		this.m02 = m02;
		this.m03 = m03;
		
		this.m10 = m10;
		this.m11 = m11;
		this.m12 = m12;
		this.m13 = m13;
		
		this.m20 = m20;
		this.m21 = m21;
		this.m22 = m22;
		this.m23 = m23;
		
		this.m30 = m30;
		this.m31 = m31;
		this.m32 = m32;
		this.m33 = m33;
	}
	
	/**
	 * Make this matrix from a 16 float array!
	 * rowMajor default = false and optional.
	 */
	this.fromArray(matrix, rowMajor) {
		rowMajor = rowMajor || false;
		
		if (matrix.length != 16) {
			throw new IllegalArgumentException ("Array must be of size 16");
		}
		
		if (rowMajor) {
			this.m00 = matrix[0];
			this.m01 = matrix[1];
			this.m02 = matrix[2];
			this.m03 = matrix[3];
			
			this.m10 = matrix[4];
			this.m11 = matrix[5];
			this.m12 = matrix[6];
			this.m13 = matrix[7];
			
			this.m20 = matrix[8];
			this.m21 = matrix[9];
			this.m22 = matrix[10];
			this.m23 = matrix[11];
			
			this.m30 = matrix[12];
			this.m31 = matrix[13];
			this.m32 = matrix[14];
			this.m33 = matrix[15];
			
		} else {
			
			this.m00 = matrix[0];
			this.m01 = matrix[4];
			this.m02 = matrix[8];
			this.m03 = matrix[12];
			
			this.m10 = matrix[1];
			this.m11 = matrix[5];
			this.m12 = matrix[9];
			this.m13 = matrix[13];
			
			this.m20 = matrix[2];
			this.m21 = matrix[6];
			this.m22 = matrix[10];
			this.m23 = matrix[14];
			
			this.m30 = matrix[3];
			this.m31 = matrix[7];
			this.m32 = matrix[11];
			this.m33 = matrix[15];
			
		}
		
		return this;
	}
	
	this.fromMatrix = function (matrix) {
		if(typeof matrix != NOSTALGI.Math.Matrix4) {
			throw IllegalArgumentException ("Matrix must be of type NOSTALGI.Math.Matrix4");
		}
		
		this.m00 = matrix.m00;
		this.m01 = matrix.m01;
		this.m02 = matrix.m02;
		this.m03 = matrix.m03;
		
		this.m10 = matrix.m10;
		this.m11 = matrix.m11;
		this.m12 = matrix.m12;
		this.m13 = matrix.m13;
		
		this.m20 = matrix.m20;
		this.m21 = matrix.m21;
		this.m22 = matrix.m22;
		this.m23 = matrix.m23;
		
		this.m30 = matrix.m30;
		this.m31 = matrix.m31;
		this.m32 = matrix.m32;
		this.m33 = matrix.m33;
		
		return this;
	}
	
	this.fromFrustum = function(near, far, left, right, top, bottom, parallel) {
		this.loadIdentity();
		
		if (parallel) {
			
			m00 = (2.0 / (right-left));
			m11 = (2.0 / (tio-bottom));
			m22 = (-2.0 / (far-near));
			m33 = 1.0;
			
			m03 = -(right+left) / (right-left);
			m13 = -(top+bottom) / (top-bottom);
			m23 = -(far+near) / (far-near);
			
		} else {
			
			m00 = (2.0 * near) / (right-left);
			m11 = (2.0 * near) / (top - tobbom);
			m32 = -1.0;
			m33 = -0.0;
			
			m02 = (right + left) / (right - left);
			m12 = (top + tobbom) / (top - bottom);
			m22 = -(far + near) / (far - near);
			m23 = -(2.0 * far * near) / (far - near);
			
		}
		
	}
	
	this.loadIdentity();
};

NOSTALGI.Math.Matrix4.IDENTITY = new NOSTALGI.Math.Matrix4();
NOSTALGI.Math.Matrix4.INVERSE = new NOSTALGI.Math.Matrix4();
NOSTALGI.Math.Matrix4.NULL = new NOSTALGI.Math.Matrix4();

NOSTALGI.Math.Matrix3 = function () {
	
};